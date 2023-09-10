import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './pages/common/Login';
import Header from './components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';
import ProductManager from './pages/seller/ProductManager';
import CreateProduct from './pages/seller/CreateProduct';
import OrderManager from './pages/seller/OrderManager';
import './style/common.css';
import SellerRegister from './pages/common/SellerRegister';
import Register from './pages/common/Register';
import SellerLogin from './pages/common/SellerLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
