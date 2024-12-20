import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import './index.css';
import App2 from './App2';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <App2 />
  </Provider>,
  document.getElementById('root'),
);
