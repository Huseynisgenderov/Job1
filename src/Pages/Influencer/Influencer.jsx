import "./influencer.scss";
import foto5 from "../../assets/images/Image.jpg";
import Amount from "../../Components/Amount/Amount";

const Influencer = () => {
  return (
    <>
      <div className="littleHero">
        <div className="littleContent">
          <div className="subText">Services</div>
          <h2>Our Logistics Service</h2>
        </div>
      </div>
      <section className="influencers">
        <div className="container">
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
        <Amount/>
      </section>

    </>
  );
};

export default Influencer;
