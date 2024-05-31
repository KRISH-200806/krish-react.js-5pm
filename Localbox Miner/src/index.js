import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemecontexProvider } from './contex/Themecontex';
import {AuthcontexProvider} from './contex/Authcontex'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthcontexProvider>
  <ThemecontexProvider>
    <App />
  </ThemecontexProvider>
  </AuthcontexProvider>
);


