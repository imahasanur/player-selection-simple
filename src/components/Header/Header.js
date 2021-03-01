import React from 'react';
import './Header.css';
import logo from '../../images/bcb.jpg';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <h3 className="text-center">BANGLADESH CRICKET BOARD</h3>      
    </div>
  );
};

export default Header;