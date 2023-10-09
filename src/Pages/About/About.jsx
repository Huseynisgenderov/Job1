import "./about.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import about from "../../assets/images/aboutBackground.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className={`littleHero ${pathname === "/about" ? "aboutHero" : ""}`}>
        <div className="littleContent">
          <div className="subText" data-aos="fade-up">
            About us
          </div>
          <h2 data-aos="fade-up">About Our Promotions</h2>
        </div>
      </div>
      <section className="about">
        <div className="aboutContent">
          <div className="aboutImg" data-aos="fade-up">
            <img src={about} alt="about" />
          </div>
          <div className="aboutInfo" data-aos="fade-up">
            <div className="subText">About Us</div>
            <h3>Our Company Overview</h3>
            <p>
              Our overarching objective revolves around enhancing brand
              visibility and empowering businesses to authentically express
              their identity across prominent social and digital platforms,
              notably emphasizing YouTube. By meticulously formulating unique
              marketing and communication strategies, we are dedicated to
              realizing this objective.
            </p>
            <p>
              In addition to our primary mission, we provide extensive career
              counseling and agency backing to our content creators,
              guaranteeing their sustained prosperity in the perpetually
              changing and cutthroat digital arena. The core of our achievements
              lies in our adeptness at harmonizing brands and talents in the
              most fitting, fruitful, and streamlined manner conceivable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
