import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Login.css';
import Routes from './routes/Routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);