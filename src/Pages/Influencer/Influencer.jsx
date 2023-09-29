import "./influencer.scss";
import foto5 from "../../assets/images/youtube.png";
import Amount from "../../Components/Amount/Amount";

const Influencer = () => {
  return (
    <>
      <section className="influencers">
        <h4 className="influencer_header">Influencers</h4>
        <p className="header_p">The Best Youtubers in The World</p>
        <div className="services_container">
          <div className="row">
            <div className="cart">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto5})` }}
              >
                <div className="cartInfo">
                  <h3>Cyrptofred</h3>
                </div>
              </div>
              <div className="subscribers">
                <h3>Subscribers: 190k</h3>
                <span></span>
                <div className="buttons">
                  <button>Statistic</button>
                  <button>Go to channel</button>
                </div>
              </div>
            </div>
            <div className="cart">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto5})` }}
              >
                <div className="cartInfo">
                  <h3>CyrptoFaro</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers: 80k</h3>
                <span></span>
                <div className="buttons">
                  <button>Statistic</button>
                  <button>Go to channel</button>
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
                  <button>Statistic</button>
                  <button>Go to channel</button>
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
                  <button>Statistic</button>
                  <button>Go to channel</button>
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
                  <button>Statistic</button>
                  <button>Go to channel</button>
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
