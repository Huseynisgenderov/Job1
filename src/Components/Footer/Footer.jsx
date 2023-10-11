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
            We are The World's First Crypto Promotion Agency. Thanks to our
            services, you can develop your crypto project and get more
            investors. We do not need advertising, our work and results are in
            sight.
          </div>
          <div className="footerContact">
            <div className="contactItem">
              <img src={icon3} alt="icon3" />
              <div className="contactItemInfo">
                <h3>Email</h3>
                <Link to="mailto:cryptofastpr@gmail.com">
                  cryptofastpr@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div className="footerSocial">
            <Link to="https://t.me/CryptoFastYoutube" className="socialItem">
              <i class="fa-brands fa-telegram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
