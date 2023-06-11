import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { UserStore } from './shared/store/UserStore';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const userStore = new UserStore();

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
