import "./footer.scss";
import logo from "../../assets/images/logo1.png";
import icon3 from "../../assets/images/Icon3.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerHead">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h2>Cryptofast</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footerContent">
          <div className="footerInfo">
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </div>
          <div className="footerContact">
            <div className="contactItem">
              <img src={icon3} alt="icon3" />
              <div className="contactItemInfo">
                <h3>Email</h3>
                <Link to="mailto:mail@example.com">contact@logistics.com</Link>
              </div>
            </div>
          </div>
          <div className="footerSocial">
            <Link to="https://www.instagram.com/" className="socialItem">
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to="https://t.me/CryptoFaro1" className="socialItem">
              <i class="fa-brands fa-telegram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
