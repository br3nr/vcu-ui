import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Routes, Route} from "react-router-dom";
import PortView from "./pages/PortView";


ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="ports" element= {<PortView />}/>
      </Routes>
    </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();