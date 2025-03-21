import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/_reset.scss';
import './assets/all.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
