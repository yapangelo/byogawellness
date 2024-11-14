import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/byoga_logo.png";
import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";
import NavPopUp from "../NavPopup/NavPopup";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleCloseNav = () => {
    setIsNavVisible(false);
  };

  return (
    <header className="header">
      <ul className="header__nav">
        <Link to="/">
          <li className="header__nav-li">Home</li>
        </Link>
        <Link to="/services">
          <li className="header__nav-li">Services</li>
        </Link>
        <Link to="/events">
          <li className="header__nav-li">Events</li>
        </Link>
        <Link to="/about">
          <li className="header__nav-li">About</li>
        </Link>
        <Link to="/contact">
          <li className="header__nav-li">Contact</li>
        </Link>
      </ul>
      <img
        src={isNavVisible ? close : hamburger}
        alt="nav"
        className={`header__hamburger ${isNavVisible ? "open" : ""}`}
        onClick={handleHamburgerClick}
      />
      <Link to={"/"}>
        <img src={logo} alt="logo" className="header__logo" />{" "}
      </Link>
      {isNavVisible && <NavPopUp onClose={handleCloseNav} />}
    </header>
  );
};

export default Header;
