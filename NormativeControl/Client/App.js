import React from 'react';
import Header from './Components/Header/Header';
import PageWrapper from './Components/PageWrapper/PageWrapper';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//import rootReducer from './store/rootReducer';

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserEdit, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
//import { PATH } from "./Config";

library.add(faUserEdit, faSignInAlt);

const App = ({ children }) => (
    <div>
        <Header page={children} />
        <PageWrapper>
            {children}
        </PageWrapper>
    </div>
);

export default App;