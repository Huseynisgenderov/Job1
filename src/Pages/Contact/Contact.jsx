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
              <Link to="mailto:mail@example.com" className="itemLogo">
                <i class="fa-regular fa-envelope"></i>
              </Link>
              <p>Contact@logistics.com</p>
            </div>
            <div className="item">
              <Link to="https://wa.me/994554923705" className="itemLogo">
                <i class="fa-solid fa-phone"></i>
              </Link>
              <p>(00) 112 365 489</p>
            </div>
            <div className="item">
              <div className="itemLogo">
                <i class="fa-regular fa-clock"></i>
              </div>
              <p>Mon - Sat 9.00 - 18.00 Sunday Closed</p>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <div className="form-group">
                <input className="name" type="text" placeholder="Your Name*" />
                <input className="email" type="email" placeholder="Email*" />
              </div>
              <div className="form-group">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Phone number*"
                />
                <input className="city" type="text" placeholder="City*" />
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
