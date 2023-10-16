import "./influencer.scss";
import { useEffect } from "react";
import foto5 from "../../assets/images/youtube.png";
import Amount from "../../Components/Amount/Amount";
import { Link } from "react-router-dom";
import foto from "../../assets/images/IMG_1259.jpg";
import foto1 from "../../assets/images/IMG_1258.jpg";
import foto2 from "../../assets/images/IMG_1257.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Influencer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const alertMessage = () => {
    alert(
      "Apologies for the inconvenience caused. Our server is currently experiencing issues with the statistics information for influencers. We're actively working on resolving this problem. For urgent inquiries or updates, please connect with us through our Telegram channels."
    );
  };

  return (
    <>
      <section className="influencers">
        <h4 className="influencer_header" data-aos="fade-up">
          Influencers
        </h4>
        <p className="header_p" data-aos="fade-up">
          The Best Youtubers in The World
        </p>
        <div className="services_container">
          <div className="row">
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Fred</h3>
                </div>
              </div>
              <div className="subscribers">
                <h3>Subscribers:119k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptofred619">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto1})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Faro</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:62.6k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Faro666">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto2})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Patrick</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:77.2k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptopatrick666">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto5})` }}
              >
                <div className="cartInfo">
                  <h3>Influencer Name</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link>
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto5})` }}
              >
                <div className="cartInfo">
                  <h3>Want to join?</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Click to contact with us 👇🏻</h3>
                <span></span>
                <div className="buttons">
                  <Link to="https://t.me/CryptoFastYoutube">
                    <button> Join Us </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Amount />
      </section>
    </>
  );
};

export default Influencer;
