import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import store from './redux/redux-store';
import AppContainer from './AppContainer';

ReactDOM.render(
  <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>,
  document.getElementById('root')
);
