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
      <img
        src={isNavVisible ? close : hamburger}
        alt="nav"
        className={`header__hamburger ${isNavVisible ? "open" : ""}`}
        onClick={handleHamburgerClick}
      />
      <Link to={"/"}>
        <img src={logo} alt="logo" className="header__logo" />
        {isNavVisible && <NavPopUp onClose={handleCloseNav} />}
      </Link>
    </header>
  );
};

export default Header;
