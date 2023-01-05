import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import style from '../components/navbar.module.css';

const Navbar = () => (
  <div className={style.navbar}>
    <h1>Car Reservation </h1>
    <div className={style.navlinks}>
      <NavLink to="/">Model</NavLink>
      <NavLink to="/Lifestyle">Lifestyle</NavLink>
      <NavLink to="/Shop">Shop</NavLink>
      <NavLink to="/Booking">Booking</NavLink>
      <NavLink to="/AddCar">Add Car</NavLink>
    </div>
    <div className="media-icons">
      <a aria-label="linkedin" href="https://www.linkedin.com/in/pamphile-musonda"><FaLinkedin /></a>
      <a aria-label="linkedin" href="https://twitter.com/PamphileMusonda"><FaTwitter /></a>
      <a aria-label="linkedin" href="https://github.com/Pamphilemkp"><FaGithub /></a>
      <p>© Copyright 2022</p>
    </div>
  </div>
);

export default Navbar;
