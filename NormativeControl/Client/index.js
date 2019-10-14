import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import './index.sass';

const Main = React.lazy(() => import("./Pages/Main"));
const Rules = React.lazy(() => import("./Pages/Rules"));
const Send = React.lazy(() => import("./Pages/Send"));
const Status = React.lazy(() => import("./Pages/Status"));
const Registration = React.lazy(() => import("./Pages/RegistrationAndLogIn/Registration"));
const SignIn = React.lazy(() => import("./Pages/RegistrationAndLogIn/SignIn"));

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Suspense fallback={"loading..."}>
                <Switch>
                    <Route exact path="/" component={props => <Main {...props} />} />
                    <Route path="/rules" component={props => <Rules {...props} />} />
                    <Route path="/send" component={props => <Send {...props} />} />
                    <Route path="/status" component={props => <Status {...props} />} />
                    <Route path="/registration" component={props => <Registration {...props} />} />
                    <Route path="/sign-in" component={props => <SignIn {...props} />} />
                </Switch>
            </Suspense>
        </App>
    </BrowserRouter>,
document.getElementById("root"));