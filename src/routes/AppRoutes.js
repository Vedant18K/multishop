import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import the necessary components

import Home from '../HomePage/Home';
import Shoplist from '../Shop/shoplist';
import UserLogin from '../Account/userLogin';

import ShopDetails from '../Shop/ShopDetails';
import ShoppingCart from '../Pages/ShoppingCart';
import CheckOuts from '../Pages/CheckOuts';
import ContactUs from '../Contacts/ContactUs';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/shoplist" element={<Shoplist/>}/>
      <Route path="/shopdetails" element={<ShopDetails/>}/>
      <Route path="/shoppingcart" element={<ShoppingCart/>}/>
      <Route path="/checkouts" element={<CheckOuts/>}/>
      <Route path="/contacts" element={<ContactUs/>}/>
    </Routes>
  );
};

export default AppRoutes;
