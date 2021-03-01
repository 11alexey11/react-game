import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';
import AppContainer from './AppContainer';

ReactDOM.render(
  <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
