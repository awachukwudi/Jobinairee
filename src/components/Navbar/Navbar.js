import { Link } from "react-router-dom";
import logo from "../Images/logo1.png";

export const Navbar = () => {
  return (
    <div>
      <div className="Navbar-div">
        <div>
          <img src={logo} alt="logo" width="100" height="80" />
        </div>

        <div className="links-div">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/About" className="link">
            About
          </Link>
          <Link to="/Jobs" className="link">
            Jobs
          </Link>
          <Link to="/Pages" className="link">
            Pages
          </Link>
          <Link to="/Contact" className="link">
            Contact us
          </Link>
        </div>
        <button className="btn-nav " type="button">
          Post a Job
        </button>
      </div>
    </div>
  );
};
