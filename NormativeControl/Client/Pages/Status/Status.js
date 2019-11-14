import React, {useEffect, useState} from 'react';
import * as API from '../../API';
import Loading from "../../Components/Loading/Loading";
import SmallStepper from "../../Components/Stepper/SmallStepper";
import ErrorList from "../../Components/ErrorList/ErrorList";
import FileButton from "../../Components/Buttons/FileButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Config from '../../Config';

import './status.sass'

export default function Status() {

    const [isLoading, setIsLoading] = useState(false);
    const [works, setWorks] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        API.GetWorks()
            .then(res => {
                setIsLoading(false);
                setWorks(res.data);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            })
    }, []);

    const deleteWork = (id) => {

        const isExact = confirm("Вы уверены, что хотите удалить работу?");

        if (isExact) {
            setIsLoading(true);

            API.DeleteWork(id)
                .then(res => {
                    location.reload();
                })
                .catch(error => {
                    setIsLoading(false);
                    console.log(error);
                });
        }

    };

    const uploadFile = (e, workId) => {
        const file = e.target.files[0];

        API.UploadFile(file, workId, Config.STATUS.PENDING_RECHECK)
            .then(res => {
                alert("Работа успешно отправлена на перепроверку");
                location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    };

    const getSteps = (status) => {
        return [
            <div className="step__title">Проверка <br/> компьютером</div>,
            <div className="step__title step__title_status">{status}</div>,
            <div className="step__title">Работа принята</div>,
        ]
    };

    const getActiveStep = (status) => {
        if (status === "Работа принята")
            return 4;

        return 2;
    };

    const getDate = (work) => {
        return new Date(work.date).toLocaleString("ru",
            {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            })
    };

    return <main>
        {isLoading ?
            <Loading />
            :
            <React.Fragment>
                <h1>Статусы проверки ваших работ</h1>

                {works.length !== 0 ?

                    works.map((work, index) => {
                        return (
                            <div className={`status-wrapper ${work.status === Config.STATUS.PENDING_CORRECTION && 'status_important'}`} key={index}>
                                <div className="stepper-wrapper">
                                    <div className="status__template-wrapper">
                                        <p className="status__date">{getDate(work)}</p>
                                        <h3 className="status__template">{work.template}</h3>
                                    </div>
                                    <SmallStepper steps={getSteps(work.status)} activeStep={getActiveStep(work.status)}/>
                                    <div className="remove-work" onClick={() => deleteWork(work.id)}>
                                        Удалить работу <div className="remove-work__icon"><FontAwesomeIcon icon="times"/></div>
                                    </div>
                                </div>

                                {
                                    work.status === Config.STATUS.PENDING_CORRECTION &&
                                        <div className={`errors-wrapper ${work.status === Config.STATUS.PENDING_RECHECK && "errors-wrapper_hidden"}`}>
                                            <div className="d-flex">
                                                <div className="remarks">
                                                    <div className="count-error">{work.errors.length}</div>
                                                    <p className="remarks__text mt-15">Замечания от <br />
                                                        нормоконтролера</p>
                                                </div>
                                                <ErrorList errorList={work.errors.map(e => e.desc)} className="error-list-status"/>
                                            </div>
                                            <a href={work.path} target="_blank" className="under-link status__link">
                                                Скачать свою работу <br /> c подробными комментариями</a>
                                            <FileButton text="Сдать еще раз" className="error-status-btn" id={work.id}
                                                        onChange={(e) => uploadFile(e, work.id)}/>
                                        </div>
                                }
                            </div>
                        )
                    })
                :
                    <h3 className="mt-40">У вас еще нет отправленных на проверку работ </h3>
                }
            </React.Fragment>
        }
    </main>
}