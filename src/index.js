/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import './index.scss';
// eslint-disable-next-line no-unused-vars
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation'; import SignIn from './routes/sign-in/sign-in';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path :'/',
        element: <Home />,
      },
      {
        path : 'sign-in',
        element: <SignIn />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
