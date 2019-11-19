import React, {useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import statusIcon from "../../img/checklist.svg";
import templateIcon from "../../img/template.svg";
import studentsIcon from "../../img/students.svg";

function MainNorm() {

    return <main>
        <h1>Сервисы нормоконтролера</h1>

        <div className="main-cards">
            <Link to="/normcontrol/check">
                <div className="main-card">
                    <img src={statusIcon} alt="Правила оформления" className="main-card__img"/>
                    <h3 className="main-card__title">Проверка студенческих работ</h3>
                </div>
            </Link>

            <Link to="/normcontrol/create-template">
                <div className="main-card">
                    <img src={templateIcon} alt="Создать шаблон" className="main-card__img"/>
                    <h3 className="main-card__title">Создать шаблон</h3>
                </div>
            </Link>

            <Link to="/normcontrol/students">
                <div className="main-card">
                    <img src={studentsIcon} alt="Создать шаблон" className="main-card__img"/>
                    <h3 className="main-card__title">Студенты</h3>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNorm));