// Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/kinobrain-high-resolution-logo.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      {/* Navigation Menu along with button and red line added */}
      {/* <ul className="nav-menu">
        <li className={activeItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
          <a href="#home">Home</a>
          {activeItem === 0 && <hr />}
        </li>
        <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
          <a href="#about">About us</a>
          {activeItem === 1 && <hr />}
        </li>
        <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
          <a href="#services">Services</a>
          {activeItem === 2 && <hr />}
        </li>
        <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
          <a href="#contact">Contact us</a>
          {activeItem === 3 && <hr />}
        </li>
        <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
          <a href="#pages">Pages</a>
          {activeItem === 4 && <hr />}
        </li>
      </ul> */}

      {/* Login button */}
      <div className='Login'>
        <ul className="nav-menu">
          <li className={activeItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
            <a href="#home">Home</a>
            {activeItem === 0 && <hr />}
          </li>
          <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
            <a href="#about">About us</a>
            {activeItem === 1 && <hr />}
          </li>
          <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <a href="#services">Services</a>
            {activeItem === 2 && <hr />}
          </li>
          <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
            <a href="#contact">Contact us</a>
            {activeItem === 3 && <hr />}
          </li>
          <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
            <a href="#pages">Pages</a>
            {activeItem === 4 && <hr />}
          </li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
