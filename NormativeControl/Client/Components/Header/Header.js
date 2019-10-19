import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import * as API from "../../API";

import logo from '../../img/logo.png';
import './header.sass'
import {authSuccess} from "../../Store/Auth/actions";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: false,
            name: '',
            lastName: '',
            role: ''
        };

        this.exit = this.exit.bind(this);
    }

    componentWillMount() {
        const key = localStorage.getItem('token');

        if (key) {
            API.GetUserData()
                .then(res => {
                    this.setState({
                        isAuth: true,
                        name: res.data.name,
                        lastName: res.data.lastName,
                        role: res.data.role
                    });
                    this.props.AuthSuccess(res.data);
                })
                .catch(error => {
                    localStorage.removeItem('token');
                    location.replace('/sign-in');
                })
        }
    }

    exit() {
        localStorage.removeItem('token');
        location.replace('/');
    }

    render() {
        const currentUrl = window.location.pathname;

        return <header className="header">
            <div className="menu-wrapper">
                <div className="logo">
                    <div className="urfu">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="name-service">
                        Система нормоконтроля <br/>
                        студенческих работ
                    </div>
                </div>

                <nav className="nav">
                    <Link className={`nav__link ${currentUrl === '/'? 'active':''}`} to='/'>Главная</Link>
                    <Link className={`nav__link ${currentUrl === '/rules'? 'active':''}`} to='/rules'>Правила оформления</Link>
                    <Link className={`nav__link ${currentUrl === '/send'? 'active':''}`} to='/send'>Отправить работу</Link>
                    <Link className={`nav__link ${currentUrl === '/status'? 'active':''}`} to='/status'>Статус проверки работы</Link>
                </nav>
            </div>
            <div className="user-wrapper">
                {!this.state.isAuth?
                    <React.Fragment>
                        <Link to="/registration" className={`user__link ${currentUrl === '/registration'? 'active':''}`}>
                            <FontAwesomeIcon icon="user-edit" /> Регистрация
                        </Link>
                        <Link to="/sign-in" className={`user__link ${currentUrl === '/sign-in'? 'active':''}`}>
                            <FontAwesomeIcon icon="sign-in-alt"/> Войти
                        </Link>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Link to="/profile">
                            <span className="user">
                                <FontAwesomeIcon icon="user" />
                                <span className="user-name">{`${this.state.lastName} ${this.state.name}`}</span>
                            </span>
                        </Link>
                        <span className="user-exit" onClick={this.exit}>
                            <FontAwesomeIcon icon="sign-out-alt" /> Выход
                        </span>
                    </React.Fragment>
                }
            </div>
        </header>
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        AuthSuccess: (userData) => dispatch(authSuccess(userData))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));