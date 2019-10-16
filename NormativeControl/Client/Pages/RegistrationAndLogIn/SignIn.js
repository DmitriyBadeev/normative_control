import React from 'react';
import {TextField} from "@material-ui/core";
import SolidButton from '../../Components/Buttons/SolidButton';

import axios from 'axios';
import { PATH, TOKEN_URL } from '../../Config';

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();

        const config = {
            params: {
                "login": this.state.email,
                "password": this.state.password
            }
        };

        axios.get(PATH+TOKEN_URL, config)
            .then(res => {
                localStorage.setItem('token', res.data.accses_token);

                setTimeout(function () {
                    location.replace('/')
                }, 0)
            })
            .catch(error => {
                if(error.response.status === 401) {
                    this.setState({error: 'Неверный логин или пароль'})
                }
            })
    }

    emailHandler(e) {
        this.setState({email: e.target.value})
    }

    passwordHandler(e) {
        this.setState({password: e.target.value})
    }

    render() {
        return <div>
            <h1 className="center">Войти в систему</h1>
            <form className="logpass-form" onSubmit={this.submitHandler}>
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
                {this.state.error? <p className="form-error">{this.state.error}</p>: null}
                <SolidButton text="Войти" size="big" className="form-button"/>
            </form>
        </div>
    }
}