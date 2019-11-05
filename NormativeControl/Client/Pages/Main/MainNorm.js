import React, {useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import statusIcon from "../../img/checklist.svg";

function MainNorm(props) {

    useEffect(() => {
        const key = localStorage.getItem('token');

        if (props.userData.role === "Студент" || !key){
            location.replace('/');
        }

    }, [props]);

    return <main>
        <h1>Сервисы нормоконтролера</h1>

        <div className="main-cards">
            <Link to="/normcontrol/check">
                <div className="main-card">
                    <img src={statusIcon} alt="Правила оформления" className="main-card__img"/>
                    <h3 className="main-card__title">Проверка студенческих работ</h3>
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