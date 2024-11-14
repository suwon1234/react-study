import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// redux 코드 추가
import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
import {devToolsEnhancer} from '@redux-devtools/extension';
import font from './modules/font';
import rootReducer from './modules/index'
import {BrowserRouter} from 'react-router-dom'
import route from './modules/route';
// 스토어 생성
const store =createStore(rootReducer,devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App /> 
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
