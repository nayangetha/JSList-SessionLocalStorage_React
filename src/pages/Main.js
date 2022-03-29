import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Beranda from './Beranda';
import Gallery from './Gallery';
import Cart from './Cart';

const Main = () => (
    
    <Routes>
        <Route exact path="/" element={<Beranda/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
)

export default Main;