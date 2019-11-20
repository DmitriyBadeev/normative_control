import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import * as Config from '../../Config';
import * as API from "../../API";

import logo from '../../assets/logo.png';
import './header.sass'
import {authFail, authSuccess} from "../../Store/Auth/actions";
import Loading from "../Loading/Loading";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuth: false,
            name: '',
            lastName: '',
            role: '',
            key: ''
        };

        this.exit = this.exit.bind(this);
    }

    componentWillMount() {
        const key = localStorage.getItem('token');
        if (key) {
            this.setState({key: key});
            API.GetUserData()
                .then(res => {

                    if (res.data.role === Config.ROLE.NORMCONTROL && location.pathname === '/')
                        location.replace('/normcontrol');

                    else if (res.data.role === Config.ROLE.STUDENT && location.pathname === '/normcontrol')
                        location.replace('/');

                    else {
                        this.setState({
                            isAuth: true,
                            name: res.data.name,
                            lastName: res.data.lastName,
                            role: res.data.role
                        });
                        this.props.AuthSuccess(res.data);
                    }
                })
                .catch(error => {
                    localStorage.removeItem('token');
                    location.replace('/sign-in');
                })
        } else {
            if(location.pathname === '/normcontrol')
                location.replace('/');

            this.props.AuthFail();
        }
    }

    exit() {
        localStorage.removeItem('token');
        location.replace('/');
    }

    getLinksDependsOnRole(currentUrl) {
        if (this.state.role === 'Студент' || this.state.role === '') {
            return <nav className="nav">
                <Link className={`nav__link ${currentUrl === '/' && 'active'}`} to='/'>Главная</Link>
                <Link className={`nav__link ${currentUrl === '/rules' && 'active'}`} to='/rules'>Правила оформления</Link>
                <Link className={`nav__link ${currentUrl === '/send' && 'active'}`} to='/send'>Отправить работу</Link>
                <Link className={`nav__link ${currentUrl === '/status' && 'active'} ${this.props.userData.hasImportantWorks && 'nav__link_important'}`}
                      to='/status'>Статус проверки работы</Link>
            </nav>
        }

        if (this.state.role === 'Нормоконтролер') {
            return <nav className="nav">
                <Link className={`nav__link ${currentUrl === '/normcontrol'? 'active':''}`} to='/normcontrol'>Главная</Link>
                <Link className={`nav__link ${currentUrl === '/normcontrol/check'? 'active':''}`} to='/normcontrol/check'>Проверка студенческих работ</Link>
                <Link className={`nav__link ${currentUrl === '/normcontrol/create-template'? 'active':''}`}
                      to='/normcontrol/create-template'>Шаблоны</Link>
                <Link className={`nav__link ${currentUrl === '/normcontrol/students'? 'active':''}`} to='/normcontrol/students'>Студенты</Link>
            </nav>
        }
    }

    render() {
        const currentUrl = window.location.pathname;

        if (this.props.isLoading)
            return <div className="preloader">
                <Loading />
            </div>;

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

                {this.getLinksDependsOnRole(currentUrl)}

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
    return {
        isLoading: state.AuthReducer.isLoading,
        userData: state.AuthReducer.userData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        AuthSuccess: (userData) => dispatch(authSuccess(userData)),
        AuthFail: () => dispatch(authFail())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));