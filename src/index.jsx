import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Account from './Components/Account/Account';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="profile" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

