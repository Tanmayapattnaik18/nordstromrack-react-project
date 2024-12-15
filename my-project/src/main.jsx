import React from 'react';
import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import './App.css'

ReactDom.createRoot (document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
    )
