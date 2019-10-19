import React from 'react';
import { Link } from 'react-router-dom'

import './main.sass';
import normsIcon from '../../img/documents.svg'
import sendIcon from '../../img/open-email.svg'
import statusIcon from '../../img/checklist.svg'

export default class Main extends React.Component{

    render() {
        return <main>
            <h1>Сервисы</h1>

            <div className="main-cards">
                <Link to="/rules">
                    <div className="main-card">
                        <img src={normsIcon} alt="Правила оформления" className="main-card__img"/>
                        <h3 className="main-card__title">Правила оформления</h3>
                    </div>
                </Link>

                <Link to="/send">
                    <div className="main-card">
                        <img src={sendIcon} alt="Отправить работу" className="main-card__img"/>
                        <h3 className="main-card__title">Отправить работу</h3>
                    </div>
                </Link>

                <Link to="/status">
                    <div className="main-card">
                        <img src={statusIcon} alt="Проверить статус работы" className="main-card__img"/>
                        <h3 className="main-card__title">Проверить статус работы</h3>
                    </div>
                </Link>
            </div>
        </main>
    }
}