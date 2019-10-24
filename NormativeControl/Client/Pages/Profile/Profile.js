import React from 'react';

import './profile.sass';
import studentIcon from '../../img/student.svg'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Profile extends React.Component {

    render() {

        return <main>
            <h1 className="center">Профиль</h1>

            <div className="profile-card">
                <img src={studentIcon} alt="Студент" className="profile-card__img"/>
                <h3 className="profile-card__role">{this.props.userData.role}</h3>
                <div className="profile-card__table">
                    <div className="profile-card__row">
                        <p className="profile-card__key">ID:</p>
                        <p className="profile-card__value">{this.props.userData.id}</p>
                    </div>
                    <div className="profile-card__row">
                        <p className="profile-card__key">Имя:</p>
                        <p className="profile-card__value">{this.props.userData.name}</p>
                    </div>
                    <div className="profile-card__row">
                        <p className="profile-card__key">Фамилия:</p>
                        <p className="profile-card__value">{this.props.userData.lastName}</p>
                    </div>
                    <div className="profile-card__row">
                        <p className="profile-card__key">Email:</p>
                        <p className="profile-card__value">{this.props.userData.email}</p>
                    </div>
                    <div className="profile-card__row">
                        <p className="profile-card__key">Группа:</p>
                        <p className="profile-card__value">{this.props.userData.group}</p>
                    </div>
                </div>
            </div>
        </main>
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.AuthReducer.userData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));