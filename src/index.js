import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import ReactThunk from 'react-thunk';
import ReactPromise from 'react-promise';
import { BrowserRouter } from 'react-router-dom';
import Reducer from './_reducers';

const createStoreWithMiddleware = applyMiddleware(
  ReactPromise,
  ReactThunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    Reducer,
    window._REDUX_DEVTOOLS_EXTENTION__ &&
    window.__REDUX_DEVTOOLS__EXTENTION__()
  )}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();