import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main'; // Main component
import './index.css'; // Optional: Your CSS file
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for React 18
root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
            <Main />
        {/* </BrowserRouter> */}
    </React.StrictMode>
);

