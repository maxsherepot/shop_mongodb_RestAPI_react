import React from "react"
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./components/App";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
)