import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// App.js import as App
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // root에 <App /> 을 이어줌
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 이 파일은 잘 안 건드림
// main.jsx 로 표현하기도 함