import React from 'react';
import Header from './Components/Header/Header';
import PageWrapper from './Components/PageWrapper/PageWrapper';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './store/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserEdit, faSignInAlt, faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faUserEdit, faSignInAlt, faUser, faSignOutAlt);



const App = ({ children }) => (
    <Provider store={store}>
        <Header page={children} />
        <PageWrapper>
            {children}
        </PageWrapper>
    </Provider>
);

export default App;