import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//import rootReducer from './store/rootReducer';

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { library } from '@fortawesome/fontawesome-svg-core';
//import { } from '@fortawesome/free-solid-svg-icons';
//import { PATH } from "./Config";

//library.add();

const App = ({ children }) => (
    <div>
        {children}
    </div>
);

export default App;