/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import App from './App';
import UserProvider from './contexts/user.context';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation'; 
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import ProductsProvider  from './contexts/product.context';
import CartProvider from './contexts/cart.context';
import './index.scss';

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
        path : 'auth',
        element: <Authentication />,
      },
      {
        path : 'shop',
        element: <Shop />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
         <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
