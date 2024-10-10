import "./NavPopup.scss";
import { Link } from "react-router-dom";

const NavPopup = () => {
  return (
    <nav className="navpopup">
      <div className="navpopup__page-container">
        <Link to={"/"}>
          <h1 className="navpopup__page">HOME</h1>
        </Link>
        <Link to={"/services"}>
          <h1 className="navpopup__page">SERVICES</h1>
        </Link>
        <Link to={"/about"}>
          <h1 className="navpopup__page">ABOUT</h1>
        </Link>
        <Link to={"/contact"}>
          <h1 className="navpopup__page">CONTACT</h1>
        </Link>
      </div>
    </nav>
  );
};
export default NavPopup;
