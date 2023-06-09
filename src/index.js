import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Carts from './components/Carts';
import NewProducts from './components/NewProducts';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <NotFound />,
    children:[
      {index: true, element: <Home />}, 
      {path:'/products', element: <Products />},  
      {path:'/carts', element: <Carts />},  
      {path:'/products/new', element: <NewProducts />},  
      {path:'/login', element: <Login />},  
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
