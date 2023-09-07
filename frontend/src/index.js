import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FacebookProvider } from 'react-facebook';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FacebookProvider appId="1100452304254051">
      <App/>
    </FacebookProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
