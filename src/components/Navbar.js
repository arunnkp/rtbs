import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left logo */}
      <div className="navbar-logo">
        <img
          src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png"
          alt="Left Logo"
          className="logo"
        />
      </div>

      {/* Menu section */}
      <div className="navbar-menu">
        <div className="menu-line">
          <span>Login</span>
          <span>Register</span>
          <span>Agent Login</span>
          <span>Contact Us</span>
          <span>Help & Support</span>
          <span>Daily Deals</span>
          <span>Alerts</span>
          <span>Time</span>
          <span>A-</span>
          <span>A</span>
          <span>A+</span>
          <span>Hindi</span>
        </div>
        <div className="menu-line">
        <span><FontAwesomeIcon icon={faHouse} /></span>
          <span>IRCTC Exclusive</span>
          <span>Trains</span>
          <span>Loyalty</span>
          <span>IRCTC eWallet</span>
          <span>Buses</span>
          <span>Flights</span>
          <span>Hotels</span>
          <span>Holidays</span>
          <span>Meals</span>
          <span>Promotions</span>
          <span>More</span>
        </div>
      </div>

      {/* Right logo */}
      <div className="navbar-logo">
        <img
          src="https://www.irctc.co.in/nget/assets/images/logo.png"
          alt="Right Logo"
          className="logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
