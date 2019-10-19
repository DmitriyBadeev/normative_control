import React from 'react';
import {TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import SolidButton from '../../Components/Buttons/SolidButton';

import * as API from '../../API';
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
            error: '',
            isLoading: false
        };

        this.submitHandler = this.submitHandler.bind(this);
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

        this.setState({isLoading: true});
        API.Registration(
            this.state.name, this.state.lastName, this.state.email, this.state.password, this.state.group, 'Студент')
            .then(res => {
                localStorage.setItem('token', res.data.token);
                location.replace('/');
                this.setState({isLoading: false});
            })
            .catch(error => {
                this.setState({isLoading: false});
                if(error.response.status === 409)
                    this.setState({error: "Аккаунт с таким Email уже существует"});
                else
                    this.setState({error: error.response.statusText});
            })
    }

    render() {
        return <main>
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
                        onChange={(e) => this.setState({name: e.target.value})}
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
                        onChange={(e) => this.setState({lastName: e.target.value})}
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
                        onChange={(e) => this.setState({email: e.target.value})}
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
                        onChange={(e) => this.setState({group: e.target.value})}
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
                        onChange={(e) => this.setState({password: e.target.value})}
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
                        onChange={(e) => this.setState({repeatPassword: e.target.value})}
                        type="password"
                    />
                </div>
                <div className="wrapper-check">
                    <FormControlLabel
                        control={
                            <Checkbox onChange={(e) => this.setState({check: e.target.checked})} />
                        }
                        label="Подтверждение на обработку персональных данных"
                    />
                </div>
                {this.state.error? <p className="form-error">{this.state.error}</p>: null}
                <SolidButton text={this.state.isLoading? "Загрузка..." : "Зарегистрироваться"} size="big" className="form-button"/>
            </form>
        </main>
    }
}