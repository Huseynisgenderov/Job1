import "./about.scss";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="littleHero">
        <div className="littleContent">
          <div className="subText">About us</div>
          <h2>About Our Logistics</h2>
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
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem quia
              voluptassit.Sed ut perspiciatis, unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam
              eaque ipsa, quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem
              quia voluptassit.Sed ut perspiciatis, unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
              voluptatem quia voluptassit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
