import "./navbar.scss";
import logo from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  //for SideMenu
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <section className="navbar" id={showSideMenu ? "show" : ""}>
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
          <div className="menuLittle">
            <span onClick={() => setShowSideMenu(!showSideMenu)}>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <b onClick={() => setShowSideMenu(!showSideMenu)}>Menu</b>
          </div>
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
            <Link to="/contact" className="button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="sideBar">
        <div className="menu-top" onClick={() => setShowSideMenu(false)}>
          <span>X</span>
        </div>
        <ul className="menuInner">
          <Link to="/" onClick={() => setShowSideMenu(false)}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={() => setShowSideMenu(false)}>
            <li>About</li>
          </Link>
          <Link to="/services" onClick={() => setShowSideMenu(false)}>
            <li>Services</li>
          </Link>
          <Link to="/influencer" onClick={() => setShowSideMenu(false)}>
            <li>Influencer</li>
          </Link>
          <Link to="/contact" onClick={() => setShowSideMenu(false)}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
