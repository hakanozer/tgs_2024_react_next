import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

// import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import Control from './pages/Control';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';

const routes = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/dashboard' element={<Control item={<Dashboard />} />} />
    <Route path='/profile' element={<Control item={<Profile />} />} />
    <Route path='/productDetail/:pid' element={<Control item={<ProductDetail />} />} />
  </Routes>
  <ToastContainer />
</BrowserRouter>
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);

