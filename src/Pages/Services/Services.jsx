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
            <h2 className="howWeWorkHeadH2">CF CRYPTO MARKETING AGENCY SERVICES WE OFFER</h2>
          </div>
          <div className="services_container">
            <div className="row">
              <div className="services_card">
                <i class="fa-solid fa-people-group"></i>
                <h2>Crypto Influencer Marketing</h2>
                <span>
                  We have the largest crypto influencer database. We can
                  strategize, identify, connect, negotiate, and optimize
                  influencer marketing campaigns to build hype for your brand.
                  We have the relationships, processes, frameworks, and
                  technology you need.
                </span>
              </div>
              <div className="services_card">
                <i class="fa-brands fa-connectdevelop"></i>{" "}
                <h2>Crypto Social Media Marketing Firm</h2>
                <span>
                  The most successful crypto projects are the ones that market
                  themselves best on social media. This includes constantly
                  posting updates and building hype. Communication on Twitter,
                  Youtube and Instagram is key. We have your digital marketing
                  covered.
                </span>
              </div>
              <div className="services_card">
                <i class="fa-solid fa-people-arrows"></i> <h2>CEX Listing</h2>
                <span>
                  We can help you with CEX's listings. We can contribute to your
                  growth together with the companies we partner with. (LaToken,
                  Bitmart, etc.)
                </span>
              </div>
              <div className="services_card">
                <i class="fa-brands fa-bitcoin"></i>
                <h2>Crypto Token Marketing</h2>
                <span>
                  We offer strategy and support for all of the blockchain
                  marketing ecosystems such as Ethereum, Solana, Binance, and
                  more. Our team of industry experts and network of marketers
                  understand what works because we see hundreds of startup and
                  enterprise projects.
                </span>
              </div>
              <div className="services_card">
                <i class="fa-brands fa-hive"></i>
                <h2>Crypto & Blockchain Strategic Advisory</h2>
                <span>
                  How do the fastest growing crypto & blockchain companies in
                  the world do it? That's what we can help with at Greenery
                  Agency. Our team of experts and network of some of the most
                  successful thought leaders can share the insights you're
                  missing.
                </span>
              </div>
              <div className="services_card">
                <i class="fa-solid fa-envelope-circle-check"></i>
                <h2>Crypto Influencer Contact Email</h2>
                <span>
                  From Twitter and YouTube, to Instagram, Greenery Agency the
                  best blockchain marketing agencies has created the largest
                  database of Crypto & NFT influencers that can bring awareness
                  to your project. Access through our SAAS platform.
                </span>
              </div>
              <div className="services_card">
                <i class="fa-solid fa-users-between-lines"></i>
                <h2>Crypto Community Management</h2>
                <span>
                  Community is everything. We’ve been building crypto & NFT
                  communities for the past 3 years on different channels ranging
                  from Discord, to Telegram. We understand that the next big
                  crypto project will be community led. Leverage our experience
                  and expertise.
                </span>
              </div>
              <div className="services_card">
                <i class="fa-solid fa-hand-holding-dollar"></i>
                <h2>Crypto Paid Advertising</h2>
                <span>
                  Crypto Ads will be on every social media platform including
                  Google, Instagram, YouTube, Twitter, and more. We can help you
                  get more exposure and run better campaigns for your crypto &
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
