import "./about.scss";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="littleHero">
        <div className="littleContent">
          <div className="subText">About us</div>
          <h2>About Our Promotions</h2>
        </div>
      </div>
      <section className="about">
        <div className="aboutContent">
          <div className="aboutImg">
            <img src={about} alt="about" />
          </div>
          <div className="aboutInfo">
            <div className="subText">About Us</div>
            <h3>Our Company Overview</h3>
            <p>
              Our primary goal is to elevate brand visibility and empower them
              to effectively convey their identity on major social and digital
              platforms, with a particular focus on YouTube. Through crafting
              distinctive marketing and communication strategies, we work to
              achieve this.
            </p>
            <p>
              We offer comprehensive career guidance and agency support to our
              content creators, ensuring their long-term success in the
              ever-evolving and competitive digital landscape. Our success stems
              from our ability to unite brands and talents in the most
              appropriate, fruitful, and efficient manner possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
