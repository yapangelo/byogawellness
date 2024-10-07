import "./Header.scss";
import logo from "../../assets/byoga_logo.png";
import hamburger from "../../assets/hamburger-mobile.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={hamburger} alt="nav" className="header__hamburger" />
      <img src={logo} alt="logo" className="header__logo" />
      <p className="a">a</p>
    </div>
  );
};

export default Header;
