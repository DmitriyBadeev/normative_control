import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';

const Main = React.lazy(() => import("./Pages/Main"));

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Suspense fallback={"loading..."}>
                <Switch>
                    <Route exact path="/" component={props => <Main {...props} />} />
                </Switch>
            </Suspense>
        </App>
    </BrowserRouter>,
document.getElementById("root"));