import "./navbar.scss";
import logo from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="header">
        <div className="logoHeader">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <h3>Cryptofast</h3>
          </Link>
        </div>
      </div>
      <div className="menuBar">
        <div className="menuContent">
          <div className="navigate">
            <Link to="/" className="navigation">
              Home
            </Link>
            <Link to="/about" className="navigation">
              About
            </Link>
            <Link to="/influencer" className="navigation">
              Infuluencers
            </Link>
            <Link to="/services" className="navigation">
              Services
            </Link>
            <Link to="/contact" className="navigation">
              Contract
            </Link>
          </div>
          <div className="rightMenuBar">
            <div className="social">
              <Link to="https://www.instagram.com/" className="socialItem">
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link to="https://www.facebook.com/" className="socialItem">
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link to="https://twitter.com/" className="socialItem">
                <i class="fa-brands fa-twitter"></i>
              </Link>
              <Link to="https://t.me/CryptoFaro1" className="socialItem">
                <i class="fa-brands fa-telegram"></i>
              </Link>
            </div>
            <Link to="/contact" className="button">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
