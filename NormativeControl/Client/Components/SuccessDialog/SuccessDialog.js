import React from 'react';

import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LiteButton from "../Buttons/LiteButton";
import './successDialog.sass'

export default function SuccessDialog({isOpen, onClose}) {

    return <Dialog open={isOpen} aria-labelledby="simple-dialog-title" onClose={onClose}>
        <div className="dialog-wrapper">
            <div className="dialog__check-wrapper">
                <div className="dialog__check">
                    <FontAwesomeIcon icon="check"/>
                </div>
            </div>
            <h4>Работа успешно отправлена на проверку</h4>
            <LiteButton text="Закрыть" onClick={onClose} size="medium" className="dialog-button"/>
        </div>
    </Dialog>
}