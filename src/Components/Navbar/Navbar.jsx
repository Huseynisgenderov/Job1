import "./navbar.scss";
import logo from "../../assets/images/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  //for SideMenu
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <section
      className={`navbar ${pathname === "/influencer" ? "black" : pathname === "/services" ? "black" : ""}`}
      id={showSideMenu ? "show" : ""}
    >
      {/* <div className="header">
        <div className="logoHeader">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <h3>Cryptofast</h3>
          </Link>
        </div>
      </div> */}
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
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <h3>CryptoFast</h3>
          </Link>
          <div className="navigate">
            <Link to="/" className="navigation">
              Home
            </Link>
            <Link to="/services" className="navigation">
              Services
            </Link>
            <Link to="/influencer" className="navigation">
              Influencers
            </Link>
            <Link to="/about" className="navigation">
              About
            </Link>
            <Link to="/contact" className="navigation">
              Contact
            </Link>
          </div>
          <div className="rightMenuBar">
            <div className="social">
              <h3>Contact us:</h3>
              <Link to="https://t.me/CryptoFastYoutube" className="socialItem">
                <i class="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sideBar">
        <div className="menu-top" onClick={() => setShowSideMenu(false)}>
          <p className="name">
            Crypto<span>Fast</span>{" "}
          </p>
          <span className="close_button">X</span>
        </div>
        <ul className="menuInner">
          <Link to="/" onClick={() => setShowSideMenu(false)}>
            <li>Home</li>
          </Link>
          <Link to="/services" onClick={() => setShowSideMenu(false)}>
            <li>Services</li>
          </Link>
          <Link to="/influencer" onClick={() => setShowSideMenu(false)}>
            <li>Influencer</li>
          </Link>
          <Link to="/about" onClick={() => setShowSideMenu(false)}>
            <li>About</li>
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
