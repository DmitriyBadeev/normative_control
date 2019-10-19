import React from 'react';
import { TextField } from "@material-ui/core";
import SolidButton from '../../Components/Buttons/SolidButton';

import * as API from '../../API';

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            error: ''
        };

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();

        this.setState({isLoading: true});

        API.GetToken(this.state.email, this.state.password)
            .then(res => {
                localStorage.setItem('token', res.data.accses_token);

                this.setState({isLoading: false});

                setTimeout(function () {
                    location.replace('/')
                }, 0)
            })
            .catch(error => {
                this.setState({isLoading: false});

                if(error.response.status === 401) {
                    this.setState({error: 'Неверный логин или пароль'})
                } else {
                    this.setState({error: error.response.statusText})
                }
            })
    }

    render() {
        return <main>
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
                        onChange={(e) => this.setState({email: e.target.value})}
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
                {this.state.error? <p className="form-error">{this.state.error}</p>: null}
                <SolidButton text={this.state.isLoading? "Загрузка..." : "Войти"} size="big" className="form-button"/>
            </form>
        </main>
    }
}