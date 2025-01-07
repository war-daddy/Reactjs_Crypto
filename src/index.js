import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main'; // Main component
import './index.css'; // Optional: Your CSS file


const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for React 18
root.render(
    <React.StrictMode>
       
            <Main />
        
    </React.StrictMode>
);

