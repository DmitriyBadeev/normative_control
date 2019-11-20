import React, { useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom'

import './main.sass';
import normsIcon from '../../assets/documents.svg'
import sendIcon from '../../assets/open-email.svg'
import statusIcon from '../../assets/checklist.svg'
import {connect} from "react-redux";


function Main() {

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

const mapStateToProps = (state) => {
    return {
        userData: state.AuthReducer.userData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));