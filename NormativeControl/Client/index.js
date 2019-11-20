import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import Loading from "./Components/Loading/Loading";

const MainNorm = React.lazy(() => import("./Pages/Main/MainNorm"));
const Check = React.lazy(() => import("./Pages/Check/Check"));
const CreateTemplate = React.lazy(() => import("./Pages/CreateTemplate/CreateTemplate"));
const Students = React.lazy(() => import("./Pages/Students/Students"));

const Main = React.lazy(() => import("./Pages/Main/Main"));
const Rules = React.lazy(() => import("./Pages/Rules/Rules"));
const Send = React.lazy(() => import("./Pages/Send/Send"));
const Status = React.lazy(() => import("./Pages/Status/Status"));

const Registration = React.lazy(() => import("./Pages/RegistrationAndLogIn/Registration"));
const SignIn = React.lazy(() => import("./Pages/RegistrationAndLogIn/SignIn"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));

const NotFound = React.lazy(() => import("./Pages/NotFound"));

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={props => <Main {...props} />} />
                    <Route exact path="/normcontrol" component={props => <MainNorm {...props} />} />
                    <Route path="/normcontrol/check" component={props => <Check {...props} />} />
                    <Route path="/normcontrol/create-template" component={props => <CreateTemplate {...props} />} />
                    <Route path="/normcontrol/students" component={props => <Students {...props} />} />
                    <Route path="/rules" component={props => <Rules {...props} />} />
                    <Route path="/send" component={props => <Send {...props} />} />
                    <Route path="/status" component={props => <Status {...props} />} />
                    <Route path="/registration" component={props => <Registration {...props} />} />
                    <Route path="/sign-in" component={props => <SignIn {...props} />} />
                    <Route path="/profile" component={props => <Profile {...props} />} />
                    <Route path="*" component={props => <NotFound {...props}/>} />
                </Switch>
            </Suspense>
        </App>
    </BrowserRouter>,
document.getElementById("root"));