import React, {useState} from 'react';
import SolidButton from "../../Components/Buttons/SolidButton";
import LiteButton from "../../Components/Buttons/LiteButton";
import './send.sass';
import * as API from "../../API";

export default function ({templates, selectedTemplate, file, globalSetErrors, getGlobalErrors, isGlobalChecked}) {
    //console.log(file.name);

    const [check, setCheck] = useState({isCheck: isGlobalChecked});
    const [errors, setErrors] = useState({errors: getGlobalErrors});

    const toCheck = () => {
        setCheck({isCheck: true});
        API.GetErrors()
            .then(res => {
                setErrors({errors: res.data});
                globalSetErrors(res.data);
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
                        <p className="step__el step__el_value">doc1.docx</p>
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
                <h4 className="mt-15">{check.isCheck? "Ошибки" : "Пройдите проверку"}</h4>

                {check.isCheck?
                    <React.Fragment>
                        <div className="errors-list">

                            {errors.errors.length === 0?
                                "Ошибок не найдено"
                                :
                                errors.errors.map((error, index) => {
                                    return <div className="error" key={index}>
                                        <div className="step__point" /> {error}
                                    </div>
                            })}

                        </div>

                        <div className="errors__btns">
                            <LiteButton text="Сдать еще раз" size="medium"/>
                            <a href="#" className="errors__down">Скачать свою работу</a>
                        </div>
                    </React.Fragment>
                    :
                    null
                }
            </div>
        </div>
    </div>
}