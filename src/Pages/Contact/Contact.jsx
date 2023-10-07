import "./contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="littleHero">
        <div className="littleContent">
          <div className="subText">Contact us</div>
          <h2>Don't be shy...</h2>
        </div>
      </div>
      <section className="contact">
        <div className="contactContent">
          <div className="contactHead">
            <div className="subText">Contact</div>
            <h2>Get in touch with us</h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>
          </div>
          <div className="contactItems">
            <div className="item">
              <span className="itemLogo">
                <i class="fa-brands fa-telegram"></i>
              </span>
              <div className="telegram_links">
                <p>Our Agents on Telegram:</p>
                <p className="link_item">
                  <Link to="https://t.me/CryptoFastAgent">
                    @CryptoFastAgent
                  </Link>
                </p>
                <p className="link_item">
                  <Link to="https://t.me/CryptoFastYT">@CryptoFastYT</Link>
                </p>
                <p className="link_item">
                  <Link to="https://t.me/CryptoFastManager">
                    @CryptoFastManager
                  </Link>
                </p>
                <p className="link_item">
                  <Link to="https://t.me/CryptoFastYoutube">
                    @CryptoFastYoutube
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <div className="form-group">
                <input className="name" type="text" placeholder="Your Name*" />
                <input className="email" type="email" placeholder="Email*" />
              </div>
              <div className="message">
                <textarea
                  cols="30"
                  rows="7"
                  class="opinnion"
                  placeholder="Message*"
                ></textarea>
              </div>
              <input type="submit" className="submit" value="Submit Message" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
