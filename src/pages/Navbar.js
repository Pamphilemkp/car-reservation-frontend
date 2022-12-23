import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../components/navbar.module.css';

const Navbar = () => (
  <div className={style.navbar}>
    <h1>Car Reservation </h1>
    <div className={style.navlinks}>
      <NavLink to="/">Model</NavLink>
      <NavLink to="/Lifestyle">Lifestyle</NavLink>
      <NavLink to="/Shop">Shop</NavLink>
      <NavLink to="/Booking">Booking</NavLink>
    </div>
  </div>
);

export default Navbar;
