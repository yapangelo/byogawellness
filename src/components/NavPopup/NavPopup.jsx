import "./NavPopup.scss";
import { Link } from "react-router-dom";

const NavPopup = ({ closePopup }) => {
  const handleLinkClick = () => {
    closePopup();
  };

  return (
    <nav className="navpopup">
      <div className="navpopup__page-container">
        <Link to={"/"} onClick={handleLinkClick}>
          <h1 className="navpopup__page">HOME</h1>
        </Link>
        <Link to={"/services"} onClick={handleLinkClick}>
          <h1 className="navpopup__page">SERVICES</h1>
        </Link>
        <Link to={"/about"} onClick={handleLinkClick}>
          <h1 className="navpopup__page">ABOUT</h1>
        </Link>
        <Link to={"/contact"} onClick={handleLinkClick}>
          <h1 className="navpopup__page">CONTACT</h1>
        </Link>
      </div>
    </nav>
  );
};
export default NavPopup;
