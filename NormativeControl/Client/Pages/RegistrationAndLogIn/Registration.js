import React from 'react';
import {TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import SolidButton from '../../Components/Buttons/SolidButton';
import axios from 'axios';
import { PATH, REGISTRATION_URL } from "../../Config";

import './field-style.sass';

export default class Registration extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
            group: '',
            check: false,
            error: ''
        };

        this.nameHandle = this.nameHandle.bind(this);
        this.lastNameHandle = this.lastNameHandle.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.groupHandler = this.groupHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.passwordRepeatHandler = this.passwordRepeatHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
    }

    nameHandle(e) {
        this.setState({name: e.target.value})
    }

    lastNameHandle(e) {
        this.setState({lastName: e.target.value})
    }

    emailHandler(e) {
        this.setState({email: e.target.value})
    }

    passwordHandler(e) {
        this.setState({password: e.target.value})
    }

    passwordRepeatHandler(e) {
        this.setState({repeatPassword: e.target.value})
    }

    checkHandler(e) {
        this.setState({check: e.target.checked})
    }

    groupHandler(e) {
        this.setState({group: e.target.value})
    }

    submitHandler(e) {
        e.preventDefault();

        if (!this.state.check) {
            this.setState({error: "Подтвердите согласие на обработку персональных данных"});
            return;
        }


        if (this.state.password !== this.state.repeatPassword) {
            this.setState({error: "Пароли не совпадают"});
            return;
        }

        const data = {
            Name: this.state.name,
            LastName: this.state.lastName,
            Email: this.state.email,
            Password: this.state.password,
            Group: this.state.group,
            Role: 'Студент'
        };

        axios.post(PATH+REGISTRATION_URL, data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                location.replace('/');
            })
            .catch(error => {
                if(error.response.status === 409)
                    this.setState({error: "Аккаунт с таким Email уже существует"});
            })
    }

    render() {
        return <div>
            <h1 className="center">Регистрация</h1>
            <form className="logpass-form" onSubmit={this.submitHandler}>
                <div className="wrapper-field">
                    <TextField
                        id="name"
                        label="Ваше имя"
                        className="field"
                        placeholder="Ваше имя"
                        margin="normal"
                        required={true}
                        onChange={this.nameHandle}
                    />
                </div>
                <div className="wrapper-field">
                    <TextField
                        id="lastName"
                        label="Ваша фамилия"
                        className="field"
                        placeholder="Ваша фамилия"
                        margin="normal"
                        required={true}
                        onChange={this.lastNameHandle}
                    />
                </div>
                <div className="wrapper-field">
                    <TextField
                        id="email"
                        label="Email"
                        className="field"
                        placeholder="Email"
                        margin="normal"
                        required={true}
                        onChange={this.emailHandler}
                    />
                </div>
                <div className="wrapper-field">
                    <TextField
                        id="group"
                        label="Группа"
                        className="field"
                        placeholder="Группа"
                        margin="normal"
                        required={true}
                        onChange={this.groupHandler}
                    />
                </div>
                <div className="wrapper-field">
                    <TextField
                        id="password"
                        label="Пароль"
                        className="field"
                        placeholder="Пароль"
                        margin="normal"
                        required={true}
                        onChange={this.passwordHandler}
                        type="password"
                    />
                </div>
                <div className="wrapper-field">
                    <TextField
                        id="repeat-password"
                        label="Повторите пароль"
                        className="field"
                        placeholder="Повторите пароль"
                        margin="normal"
                        required={true}
                        onChange={this.passwordRepeatHandler}
                        type="password"
                    />
                </div>
                <div className="wrapper-check">
                    <FormControlLabel
                        control={
                            <Checkbox onChange={this.checkHandler} />
                        }
                        label="Подтверждение на обработку персональных данных"
                    />
                </div>
                {this.state.error? <p className="form-error">{this.state.error}</p>: null}
                <SolidButton text="Зарегистрироваться" size="big" className="form-button"/>
            </form>
        </div>
    }
}