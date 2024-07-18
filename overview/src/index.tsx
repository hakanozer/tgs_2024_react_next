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
import Search from './pages/Search';
import { LikesProvider } from './contexts/LikesContext';
import Likes from './pages/Likes';
import { Provider } from 'react-redux';
import { store } from './useRedux/store';
import TodoPage from './pages/Todo';

const routes = 
<Provider store={store}>
  <LikesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Control item={<Dashboard />} />} />
        <Route path='/profile' element={<Control item={<Profile />} />} />
        <Route path='/productDetail/:pid' element={<Control item={<ProductDetail />} />} />
        <Route path='/search' element={<Control item={<Search />} />} />
        <Route path='/likes' element={<Control item={<Likes />} />} />
        <Route path='/todo' element={<Control item={<TodoPage />} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </LikesProvider>
</Provider>
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);

