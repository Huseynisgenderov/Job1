import "./navbar.scss";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="header">
        <div className="logoHeader">
          <div className="logo">
            <h3>Cryptofast</h3>
          </div>
        </div>
      </div>
      <div className="menuBar">
        <div className="menuContent">
          <div className="navigate">
            <div className="navigation">Home</div>
            <div className="navigation">About</div>
            <div className="navigation">Infuluencers</div>
            <div className="navigation">Services</div>
            <div className="navigation">Contract</div>
          </div>
          <div className="rightMenuBar">
            <div className="social">
              <div className="socialItem">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="socialItem">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="socialItem">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="socialItem">
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <button className="button">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
