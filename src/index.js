import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WeatherProvider} from "../src/context/WeatherContext";
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <WeatherProvider>
        <App />
        <ToastContainer />
      </WeatherProvider>
  </React.StrictMode>
);
