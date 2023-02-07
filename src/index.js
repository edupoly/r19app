import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '../node_modules/bootstrap/dist/js/bootstrap.min'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Products';
import Countries from './Countries';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/countries',
                element:<Countries></Countries>
            }
        ]

    },
    
])
root.render(
    <RouterProvider router={router}></RouterProvider>
);
