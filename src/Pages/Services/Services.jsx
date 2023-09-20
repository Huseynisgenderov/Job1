import "./services.scss";
import left from "../../assets/images/howwework.jpg";
import icon5 from "../../assets/images/pack.jpg";
import icon6 from "../../assets/images/Sheild Icon.png";
import icon7 from "../../assets/images/Environment Icon.png";
import Amount from "../../Components/Amount/Amount";

const Services = () => {
  return (
    <>
      <div className="littleHero">
        <div className="littleContent">
          <div className="subText">Services</div>
          <h2>Promotion Service</h2>
        </div>
      </div>
      <section className="services">
        <div className="howWeWork">
          <div className="howWeWorkHead">
            <div className="subText">Our Goodness</div>
            <h2>CF CRYPTO MARKETING AGENCY SERVICES WE OFFER</h2>
          </div>
          <div className="howWeWorkContent">
            <div className="img">
              <img src={left} alt="left" />
            </div>
            <div className="content">
              <div className="contentInfo">
                <div className="infoTicket">
                  <img src={icon5} alt="icon5" />
                  <div className="ticketInfo">
                    <h3>Warehousing Services</h3>
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking
                    </p>
                  </div>
                </div>
                <div className="infoTicket">
                  <img src={icon6} alt="icon5" />
                  <div className="ticketInfo">
                    <h3>Safety & Quality</h3>
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking
                    </p>
                  </div>
                </div>
                <div className="infoTicket">
                  <img src={icon7} alt="icon5" />
                  <div className="ticketInfo">
                    <h3>Care for Environment</h3>
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking
                    </p>
                  </div>
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

export default Services;
