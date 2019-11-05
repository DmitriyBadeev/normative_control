import React, {useState, useEffect} from 'react';
import SolidButton from "../../Components/Buttons/SolidButton";
import './send.sass';
import * as API from "../../API";
import Loading from '@material-ui/core/CircularProgress';
import FileButton from "../../Components/Buttons/FileButton";
import ErrorList from "../../Components/ErrorList/ErrorList";

export default function ({templates, selectedTemplate, file, globalSetErrors,
                         getGlobalErrors, isGlobalChecked, urlFile, onDropHandler,
                         successLoaded, setUrlFile, toBunNextStep, toAllowNextStep}) {

    const [check, setCheck] = useState({isCheck: isGlobalChecked});
    const [errors, setErrors] = useState({errors: getGlobalErrors});
    const [loading, setLoading] = useState({isLoading: false});

    useEffect(() => {
        if(!check.isCheck)
            toBunNextStep();
    }, []);

    const toCheck = () => {
        setLoading({isLoading: true});
        API.GetErrors()
            .then(res => {
                setLoading({isLoading: false});
                setCheck({isCheck: true});
                setErrors({errors: res.data});
                globalSetErrors(res.data);
                toAllowNextStep();
            })
            .catch(error => {
                setLoading({isLoading: false});
                console.log(error);
            })
    };

    const getTextTitle = () => {
        if (check.isCheck)
            return "Ошибки";

        if (loading.isLoading)
            return null;

        return "Пройдите проверку"
    };

    const reLoadFile = (e) => {
        const file = e.target.files[0];
        onDropHandler(file);

        API.UploadTempFile(file)
            .then(res => {
                successLoaded();
                setUrlFile(res.data);
                setCheck({isCheck: false});
                setErrors({errors: []});
                toBunNextStep();
            })
            .catch(error => {
                console.log(error);
            })
    };

    return <div className="step-wrapper">
        <p>Пройдите компьютерную проверку.</p>
        <div className="d-flex">
            <div className="table-wrapper mt-30">
                <div className="step__table">
                    <div className="step__row">
                        <p className="step__el step__el_key">Выбран шаблон:</p>
                        <p className="step__el step__el_value">{templates[selectedTemplate - 1]}</p>
                    </div>
                    <div className="step__row">
                        <p className="step__el step__el_key">Загружен файл:</p>
                        <p className="step__el step__el_value">{file.name}</p>
                    </div>
                    <div className="step__row">
                        <p className="step__el step__el_key">Проверка:</p>
                        <div className="step__el step__el_value"><div className={`step__point ${check.isCheck? "step__point_active" : null}`} />
                        {check.isCheck? "Пройдена": "Не пройдена"}</div>
                    </div>
                </div>

                <SolidButton text="Проверка" size="small" className="mt-30" onClick={toCheck}/>
            </div>
            <div className="errors-wrapper mt-30">
                <h4 className="mt-15">{getTextTitle()}</h4>

                {check.isCheck?
                    <React.Fragment>


                            {errors.errors.length === 0?
                                <p className="mt-20">Ошибок не найдено</p>
                                :
                                <ErrorList errorList={errors.errors} className="mt-20"/>
                            }


                        <div className="errors__btns">
                            <FileButton text="Сдать еще раз" onChange={reLoadFile}/>
                            <a href={urlFile} target="_blank" className="errors__down under-link">Скачать свою работу <br />
                            c подробными комментариями</a>
                        </div>
                    </React.Fragment>
                    :
                    loading.isLoading ? <div className="step-loading-wrapper"><Loading color="secondary"/></div> : null
                }
            </div>
        </div>
    </div>
}