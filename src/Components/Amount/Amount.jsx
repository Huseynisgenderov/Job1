import "./amount.scss";

const Amount = () => {
  return (
    <div className="aboutAmount">
      <div className="amountTicket">
        <h3>24</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Daily Video</span>
      </div>
      <div className="amountTicket">
        <h3>1294</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Hourly view</span>
      </div>
      <div className="amountTicket">
        <h3>3594</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Satisfied Clients</span>
      </div>
      <div className="amountTicket">
        <h3>247K+</h3>
        <span className="cubic"></span>
        <span className="amountInfo">Subscriber</span>
      </div>
    </div>
  );
};

export default Amount;
