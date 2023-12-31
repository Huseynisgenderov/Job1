import "./amount.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Amount = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="aboutAmount">
      <div className="amountTicket" data-aos="fade-up">
        <h3>10+</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Daily Video</span>
      </div>
      <div className="amountTicket" data-aos="fade-up">
        <h3>1150+</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Hourly view</span>
      </div>
      <div className="amountTicket" data-aos="fade-up">
        <h3>570+</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Satisfied Clients</span>
      </div>
      <div className="amountTicket" data-aos="fade-up">
        <h3>260K+</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Subscriber</span>
      </div>
    </div>
  );
};

export default Amount;
