import "./influencer.scss";
import foto5 from "../../assets/images/youtube.png";
import Amount from "../../Components/Amount/Amount";
import { Link } from "react-router-dom";
import foto from "../../assets/images/IMG_1259.jpg"
import foto1 from "../../assets/images/IMG_1258.jpg"
import foto2 from "../../assets/images/IMG_1257.jpg"

const Influencer = () => {
  return (
    <>
      <section className="influencers">
        <h4 className="influencer_header">Influencers</h4>
        <p className="header_p">The Best Youtubers in The World</p>
        <div className="services_container">
          <div className="row">
            <div className="cart">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Fred</h3>
                </div>
              </div>
              <div className="subscribers">
                <h3>Subscribers: 119k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button>Statistic</button>
                  </Link>
                  <Link to='https://www.youtube.com/@cryptofred619'>
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto1})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Faro</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers: 62.6k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Faro666">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart">
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
                    <button>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptopatrick666">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart">
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
                    <button>Statistic</button>
                  </Link>
                  <Link>
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart">
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
                    <button>Statistic</button>
                  </Link>
                  <Link>
                    <button>Go to channel</button>
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
