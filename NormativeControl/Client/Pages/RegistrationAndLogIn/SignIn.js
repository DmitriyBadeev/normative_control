import React from 'react';
import {TextField} from "@material-ui/core";
import SolidButton from '../../Components/Buttons/SolidButton';

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
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
            <form className="reg-form" onSubmit={this.submitHandler}>
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
                <SolidButton text="Войти" size="big" className="registration-button"/>
            </form>
        </div>
    }
}