import "./NavPopup.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavPopup = ({ closePopup }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleLinkClick = () => {
    closePopup();
  };

  const toggleServices = () => {
    setIsServicesOpen((prevState) => !prevState);
  };

  return (
    <nav className="navpopup">
      <div className="navpopup__page-container">
        <Link to={"/"} onClick={handleLinkClick}>
          <h1 className="navpopup__page">HOME</h1>
        </Link>
        <h1 className="navpopup__page" onClick={toggleServices}>
          SERVICES
        </h1>
        {isServicesOpen && (
          <div className="navpopup__page-more">
            <Link to="/therapy" onClick={handleLinkClick}>
              <p className="navpopup__page-item">YOGA THERAPY</p>
            </Link>
            <Link to="/training" onClick={handleLinkClick}>
              <p className="navpopup__page-item">TEACHER TRAINING</p>
            </Link>
            <Link to="/classes" onClick={handleLinkClick}>
              <p className="navpopup__page-item">STUDIO CLASSES</p>
            </Link>
          </div>
        )}
        <Link to={"/events"} onClick={handleLinkClick}>
          <h1 className="navpopup__page">EVENTS</h1>
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
