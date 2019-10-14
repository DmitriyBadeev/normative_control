import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../img/logo.png';
import './header.sass'

export default class Header extends React.Component {



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
                <Link to="/registration" className={`user__link ${currentUrl === '/registration'? 'active':''}`}>
                    <FontAwesomeIcon icon="user-edit" /> Регистрация</Link>
                <Link to="/sign-in" className={`user__link ${currentUrl === '/sign-in'? 'active':''}`}>
                    <FontAwesomeIcon icon="sign-in-alt"/> Войти</Link>
            </div>
        </header>
    }
}