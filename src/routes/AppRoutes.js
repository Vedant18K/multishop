import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import the necessary components

import Home from '../HomePage/Home';
import Shoplist from '../Shop/shoplist';
import UserLogin from '../Account/userLogin';
import SignUpPage from '../Account/SignUpPage';
import LoginPage from '../Account/LoginPage';
import ShopDetails from '../Shop/ShopDetails';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/shoplist" element={<Shoplist/>}/>
      <Route path="/shopdetails" element={<ShopDetails/>}/>
    </Routes>
  );
};

export default AppRoutes;
