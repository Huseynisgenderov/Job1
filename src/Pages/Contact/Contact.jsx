import "./contact.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="littleHero">
        <div className="littleContent">
          <div className="subText" data-aos="fade-up">
            Contact
          </div>
          <h2 data-aos="fade-up">Contact with us</h2>
        </div>
      </div>
      <section className="contact">
        <div className="contactContent">
          <div className="contactHead">
            <div className="subText" data-aos="fade-up">
              Contact
            </div>
            <h2 data-aos="fade-up">Get in touch with us</h2>
            <p data-aos="fade-up">
              In our contact section, feel free to reach out if you have any
              inquiries, wish to join our esteemed influencer team, or explore
              our specialized promotion services tailored for crypto platforms.
              Your journey in the world of cryptocurrencies begins with a single
              message to us.
            </p>
          </div>
          <div className="contactItems">
            <div className="item">
              <span className="itemLogo" data-aos="fade-up">
                <i class="fa-brands fa-telegram"></i>
              </span>
              <div className="telegram_links" data-aos="fade-up">
                <p>Our Agents on Telegram:</p>
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
                <input
                  className="name"
                  type="text"
                  placeholder="Your Name*"
                  data-aos="fade-up"
                />
                <input
                  className="email"
                  type="email"
                  placeholder="Email*"
                  data-aos="fade-up"
                />
              </div>
              <div className="message" data-aos="fade-up">
                <textarea
                  cols="30"
                  rows="7"
                  class="opinnion"
                  placeholder="Message*"
                ></textarea>
              </div>
              <input
                type="submit"
                className="submit"
                value="Submit Message"
                data-aos="fade-up"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
