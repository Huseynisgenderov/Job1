import "./services.scss";
import { useEffect } from "react";
import Amount from "../../Components/Amount/Amount";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <section className="services">
        <div className="howWeWork">
          <div className="howWeWorkHead">
            <h2 className="promotionService" data-aos="fade-up">Promotion Service</h2>
            <h2 className="howWeWorkHeadH2" data-aos="fade-up">
              CF CRYPTO MARKETING AGENCY SERVICES WE OFFER
            </h2>
          </div>
          <div className="services_container">
            <div className="row">
              <div className="services_card" data-aos="fade-up">
                <i class="fa-solid fa-people-group"></i>
                <h2>Crypto Influencer Marketing</h2>
                <span>
                  We possess the biggest crypto influencer database. We are
                  skilled at planning, recognizing, linking, bargaining, and
                  refining influencer marketing efforts to boost your brand's
                  excitement. We offer the necessary relationships, methods,
                  structures, and technology.
                </span>
              </div>
              <div className="services_card" data-aos="fade-up">
                <i class="fa-brands fa-connectdevelop"></i>{" "}
                <h2>Crypto Social Media Marketing Firm</h2>
                <span>
                  Effective social media promotion distinguishes top-performing
                  crypto ventures. This involves regular updates and creating
                  anticipation, especially on platforms like Twitter, YouTube,
                  and Instagram. Our expertise ensures your digital marketing
                  needs are met.
                </span>
              </div>
              <div className="services_card" data-aos="fade-up">
                <i class="fa-solid fa-people-arrows"></i> <h2>CEX Listing</h2>
                <span>
                  We assist with CEX listings and collaborate for mutual growth
                  with partners like LaToken, Bitmart, and others.
                </span>
              </div>
              <div className="services_card" data-aos="fade-up">
                <i class="fa-brands fa-bitcoin"></i>
                <h2>Crypto Token Marketing</h2>
                <span>
                  We provide strategic guidance and assistance across diverse
                  blockchain marketing ecosystems, including Ethereum, Solana,
                  Binance, and others. Our team of industry experts and network
                  of marketers comprehend effective strategies from their
                  experiences with numerous startup and enterprise projects.
                </span>
              </div>
              <div className="services_card" data-aos="fade-up">
                <i class="fa-brands fa-hive"></i>
                <h2>Crypto & Blockchain Strategic Advisory</h2>
                <span>
                  Wondering how the world's fastest-growing crypto & blockchain
                  firms achieve their success? CryptoFast can assist. With our
                  expert team and connections to influential thought leaders, we
                  can provide the insights you seek.
                </span>
              </div>
              <div className="services_card" data-aos="fade-up">
                <i class="fa-solid fa-envelope-circle-check"></i>
                <h2>Crypto Influencer Contact Email</h2>
                <span>
                  CryptoFast, the leading blockchain marketing firm, has built
                  an extensive database of Crypto & NFT influencers on platform
                  like YouTube. This resource can raise awareness for your
                  project, accessible via our SAAS platform.
                </span>
              </div>
              <div className="services_card" data-aos="fade-up">
                <i class="fa-solid fa-users-between-lines"></i>
                <h2>Crypto Community Management</h2>
                <span>
                  Community holds utmost importance. Over the past 3 years,
                  we've cultivated crypto & NFT communities on various
                  platforms, including Discord and Telegram. Recognizing that
                  the next significant crypto venture will be community-driven,
                  benefit from our extensive experience and expertise.
                </span>
              </div>
              <div className="services_card" data-aos="fade-up">
                <i class="fa-solid fa-hand-holding-dollar"></i>
                <h2>Crypto Paid Advertising</h2>
                <span>
                  Cryptocurrency advertisements will span across major social
                  media platforms like Google, Instagram, and YouTube. We can
                  enhance your exposure and optimize campaigns for your crypto &
                  NFT project.
                </span>
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
