import React, { useState } from 'react';
import SolidButton from "../../Components/Buttons/SolidButton";

import './send.sass';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import * as API from '../../API';
import SuccessDialog from "../../Components/SuccessDialog/SuccessDialog";

export default function ({templates, selectedTemplate, isGlobalChecked, getGlobalErrors, file}) {

    const [check, setCheck] = useState({isEmail: false});
    const [isOpen, setOpen] = useState(false);

    const Send = () => {

        API.SendWork(file, templates[selectedTemplate - 1], check.isEmail)
            .then(res => {
               setOpen(true);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const onCloseDialog = () => {
        location.replace('/status');
    };

    return <div className="step-wrapper">
        <p>Отправьте работу на проверку нормоконтролеру.</p>

        <div className="step__table mt-30">
            <div className="step__row">
                <p className="step__el step__el_key">Выбран шаблон:</p>
                <p className="step__el step__el_value">{templates[selectedTemplate - 1]}</p>
            </div>
            <div className="step__row">
                <p className="step__el step__el_key">Загружен файл:</p>
                <p className="step__el step__el_value">{ file.name }</p>
            </div>
            <div className="step__row">
                <p className="step__el step__el_key">Проверка:</p>
                <div className="step__el step__el_value"><div className={`step__point ${isGlobalChecked? "step__point_active" : null}`} />
                    {isGlobalChecked? "Пройдена": "Не пройдена"}</div>
            </div>
            <div className="step__row">
                <p className="step__el step__el_key">Ошибки:</p>
                <p className="step__el step__el_value">{getGlobalErrors.length}</p>
            </div>
        </div>

        <FormControlLabel
            control={
                <Checkbox onChange={(e) => setCheck({isEmail: e.target.checked})} />
            }
            label="Уведомлять по почте о статусе проверки"
        />

        {
            getGlobalErrors.length !== 0 ?
                <p className="step4-error mt-20">Компьютер нашел у вас ошибки в оформлении работы, мы рекомендуем
                    вам исправить ошибки и загрузить работу заново.
                    Вы уверены, что хотите отправить работу?</p>
            :
                null
        }

        <SolidButton text="Отправить" size="small" className="mt-20" onClick={Send}/>

        <SuccessDialog isOpen={isOpen} onClose={onCloseDialog}/>
    </div>
}