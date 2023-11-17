import "./influencer.scss";
import { useEffect } from "react";
import foto5 from "../../assets/images/youtube.png";
import Amount from "../../Components/Amount/Amount";
import { Link } from "react-router-dom";
import foto from "../../assets/images/IMG_1259.jpg";
import foto1 from "../../assets/images/IMG_1258.jpg";
import foto2 from "../../assets/images/IMG_1257.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Influencer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const alertMessage = () => {
    alert(
      "Apologies for the inconvenience caused. Our server is currently experiencing issues with the statistics information for influencers. We're actively working on resolving this problem. For urgent inquiries or updates, please connect with us through our Telegram channels."
    );
  };

  return (
    <>
      <section className="influencers">
        <h4 className="influencer_header" data-aos="fade-up">
          Influencers
        </h4>
        <p className="header_p" data-aos="fade-up">
          The Best Youtubers in The World
        </p>
        <div className="services_container">
          <div className="row">
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/qAvMRMhsuuMl0BdQ7UAidmgODp7OsNcQEP5DVPTa_t2OVIj3BFg9Kx1_FTFXg6i_PJY6Z9l7=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Marco Haravan</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:138k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/c/MarcoHaravan">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/G4i9I5-TI6Hrwal4r2LsUGQ316qdZRT8ybgzTPxzLQc79700CPtiG6bt1BXYWJErShIupHURqg=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Line - Cryptocurrency</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:115k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptolineCryptocurrency">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/8hYhAy82AX-xv1DqbFeWApBElOW4kU3bZKD6nw0rXfIz1SjAVapEM8kaF_1dwiQQ_NynoocU-g=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Paul Nilsen</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:331k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCMC06VNolC72nNL5Hm8SFWw">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/FORUT2I0OCimaE1EL9EBkGwyuMiJ7QlJc_Z_EF_RWLHK2flghQ2k6DJ-3rqRMuyZSw4WmxzD=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Melos Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:52.1k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@MelosCrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/e8sLN4qmFlu4plq8CbQnJjlfCeUsBy-s9tyumZcFf5Il5QB3dDlUGBfEd0yEW8gnQR4Jmp1ClQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>This is James</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:128k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@ThisisJames_crypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/DDNkhWTZ7YcTBrFu_m7GfMZBOf-OQ2bbKq_QOmlTwPhUsLkoWV5BHz6S7tMDqNEGlb5gnpYb8g=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>David in Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:157k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/c/DavidinCrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/ytc/APkrFKbKR6GstVsFOhytie2CXySs-08IBflLPfcy72Gg=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>RIKO Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:36,9k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@RIKOCrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/0Gw9wbraYZHgmFhAjXI5LPGpR88gxCqRndIHoP_3B6FiBvl5QiWoye7YtZ-SSRFVdFFrpxY3-Q=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Locke</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:105k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoLocke">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/86J1U28VbQMuVwNvieTIAoMZJZ35TDbzNKcYGme6TTtiFgzea--k5tDMYnw0bPvluQEDDR5D6g=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Dasha</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:40,5k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoDasha">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/wewcnpwi2yUBEsz5r3THBsH6pZtIpuVSXvhOPwIEhRvExEuN8opWNGx4KTx-yOjNf8E9Jx6K=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>MoneyTime</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:120k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@moneytime7552">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/lQCJrqb_eypP-pjuSgCEvZ4bsN8-Y5Rlmld_McR_0Ig9hWsFm5xmqKayRGCJ_evmG3oNSieY_Q=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Ultras Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:1,51Mn</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@UltrasCrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/ytc/APkrFKYUFyjbsl5NUbJUixvNIaKbbNGWhT9IoufOVUQ08A=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>ASSIKI TECH</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:554k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@ASSIKITECH1">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/oKO3Ij7LgwknM4dOsfArs0LdGoB790yUR2Q5ypTH5e5JjT56vT0LwufrfWlypm1PP02pDyu5gQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Jogi</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:78,8k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoJogi">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/lPsGaD1pyyAQTzs3D23POELFG5DpAnwV6Z2UUUCCG_OXTAfOhqpFpZhLVMGZz9lFNXAdPPPCSQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Крипто Инфошум</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:52,9k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoInfoNoise">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/codu3nZ95Z1r3KT_coYfB0c6gNoK2Uf_qcdiiUG_LNUWuTZ2KiDHz1YZtS5R_6JjKjjZ41WX=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Coa⚡️</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:116k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoCoa1">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/eomYq0cJC8j68XB8-WPYlt3s7uLrOYcxFw-eGWpqlwRl0zz6syQr0Yvgrb_NWVakIV4cIh8__g=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Криптонутый</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:116k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptonytiy">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/h7DxdCbni0EVzFGsFkrM_OFNUvQ9VkROOOadKaR_eccUvNxCx0vXBI1aVRSwQfxV5-I_IrO3jRo=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Sanchous Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:56,8k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Sanchous_Crypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/dOCPSZioOC5-8RFt6eQUHztXzpgyWHj5ebC7AzdzrU-9R8FrY-1wIWfdvD0tF4lNTUSlNMeGfQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>CryptoLapochka</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:90,3k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptolapochka1">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/vp_SYrQovD9VesQsLaQtYoxeeRKDtb39HQbeYZv5W0uzQd--c1GQt5ICAmhfx16WT4l3O6wtBA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>TARIK CRYPTO</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:246k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@TarikCrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/LHz-p1L1zoYSTsZYlubW-Bo-t2w7acEGxBqsz0Dp8NbXAZWyFa3SZs2XyV8EBVqQaTUGiWMT=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Rain</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:382k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoRainRu">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/aX_D6cErYjkb7qiIgn_oCMnilk70lRsu0vJ9KW3e4E3bsZ6WPEbkuu4ienJMd7Brd2at12idDA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Mario</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:486k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Crypto-Mario">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/Q7FqcA7m5MkVDNj_SksvWbMYHtKuplW5OqFCtq7uWGvUXeZ5FmdRo63AbA1eHDWALMgJgm4llQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>BTC GURU</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:50,4k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@BTCGURU">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/nT0T3XTi8KfJ7Z08D9tA16is_fyBb5PEu-JhhlixZTu3XWF-PUaP8HZK-P25BD8RNdIqO4tlToM=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Nel For Bit</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:52,5k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@NelForBit">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/ipQ2oIZHzPohFNoNPCDKS21Xv3P2qXuvdp1cSUDfDBM01L9soz7j5M-7bVPh_iBMvl01i_w1=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Digital Tail</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:50,5k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@DigitalTail">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/BFJWwBcrR0uPLs49KJ9K4spXlDn6YfMyVyTdADMtrmnby79fGyBxqTErWUSTxB-U8f7lghoCrQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>TRIGS</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:141k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@trigsnftmoney">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/yNpt8TVqMcN2xMfrxb63TVNv_Plmy2QESGdSJ0oLkbDP-1zraH5lQAcNsOlyqg0MM3WGVmCF=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>My Happy Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:123k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@MyHappyCrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/Vsd5JnzY4SFjMXrqkoj0jHwaXwefmlCf7sw-aRG-T9rZMs2pP59c_LHx8vSel-cnPE22eYP9WWk=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>CRYPTO RAY</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:50,1k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CRYPTORAYWORLD">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/_6tby1N2WHuzh2gLAYBNnATIow4Py1li9TU8EuReJdaGxhUv4fcC3IIOcTAIFeASC1glfqnfYxo=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>[SK] Universe</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:32,4k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@SKUniverseR">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/cZmHnOhFFJMyEZoLBn8ON2SsvqLc5K9LrliQlBcSx7PN8eJTsNjOlcEpQ65DXSRZ9Pb1Sx_5gg=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>CRYPTOLORE</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:117k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CRYPTOLOREEE">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/aryNjBcyY0xVHDTI4G5igfZvM86wnyfmf_z0mwtqyCEwFYyySmCHfORi8Eaba7fGE_6Dlaq3=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Узнаваемый</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:97,6k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@uznavaemiy">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/x7zRT51VkqJ8-BlZ9Jz20OhxiVrZ14ySXp2D4cxX8tfjR5-8dyNgqqXQHSYb_RcpCUby9ji06g=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Tommy Moon</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:94,1k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCv8ezN-AfKn0YTLzBxCVMOw">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/gVv3nvhS7McM4Bi8onFMlkBwE9lgQdUlfKicuBGDgMU8VApgWbbK23kgop0JDPam_KJco6dQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>LUCHOUSL</h3>
                </div>
              </div>
              <div className="subscribers">
                <h3>Subscribers:138k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Luchousl/featured">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Fred</h3>
                </div>
              </div>
              <div className="subscribers">
                <h3>Subscribers:119k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptofred619">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/pPTEAQjkQdejRmDfOHK6OFJ3Hh3EfeHR1SjD82IKYLcErkZlXzYe_sLHCGb3hrCOPNThVcmDmA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Wendy Red</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:78,9k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCRgKVbFl4EXxdSj_4LXigjw">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/WrYkXG1FrLphxydCWV4IbTxPdNLRXWwlTexa4fKtYlPLS8zIJvkp4efwD9Lhi4nMsdT-Q6a4GA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Yarik Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:58,5k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@YarikCrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/bSBroCk_swTio5pVau4erpsJ4jsedXGBecTB7ERrNVrQNLwgnGqzNiiuAy7x250B-DbtL4-y=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>SHINO YT</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:399k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@SHINO_YT">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/xFOc_p3qFYyMhN1uav6lGVi7PHnsqK2vdRpr8ghnWyKqzaNnr1nddy-YFmWQdcb56YJKvhc0kA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Laurent Furie</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:76,4k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCxtYnGJy2GjwOgkTn9CIRkw">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/8NYSmEyK9x62Tqkev23FsHv5fVFw5EESc2hu7NvzSjFh_XOOtcgtUMnZI7NMeOi35sn26sjryw=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Daniel</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:178k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCAAer8phmtkgCR7uNIrZzFg">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/lyOsxorifeN2hHhZ5QoWfN_7u_lA5p0gosyil2-h2dooTGGwngBn9YSIGQad5wMbdjUMBYdn_A=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Leo MoonShots</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:100k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/c/cryptoleoytb">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/ZH3TG05-JIrLcXm_mMC9MHyIPfRHcUQ3DYNCus4aAlN-8suL7A9NuvCud1KsklQpec9-Xu3lNes=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Juli</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:91,8k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@JuliCold">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto1})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Faro</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:62.6k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Faro666">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/HBdQ7gw5kU0yqDwKoGqsNjlRzPk2W2kvQmfocNio1icuoiYqKJ0HF_U02Nwthx9KzEdDKtNgKQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Luciana</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:130k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCDPPdq7hCYTV8_OlxgyVvfg">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/6CO8-bHkLMQbV37AobnkOKLOVqU4Lm__OUxTybBNvQSPFNGzI1r7fgxTxun3yofYJEg2J1nwuQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Shark Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:426k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@SharkCryptoo">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/y3mriDzFvigY5jO9c5PueE8nGlDUCkxtd89H47y76Hth9rf3WAAm_hNyK6lYb11QWipYeXYBrEA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Gang</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:418k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoGangg">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto2})` }}
              >
                <div className="cartInfo">
                  <h3>Crypto Patrick</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:77.2k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptopatrick666">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/6-NHekCbMlG-zkmIzDMrN14JMQiZ-tqgSFgwwEyARqRYUcstWD-UKMmYcsvq-Ji8ahqqTIQcDkw=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Banan</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:162k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoBanan">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/EG01OLIhjettzi4r5vFumocjepthxAVZb177J2Iq5a0BYs7z-aELhVv-O9GtRu6nwXbRyuyoaA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>CRIPTO NEWS</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:57,5k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Nieladar">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/bUfcJ88Y4w612LpvL_EvnfmI-gBKsQ_C6j6jlrz2AMzAXsR_06AKlbleU0zFkL1eL9aSnKCe=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Zarx Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:103k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Zarxcrypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/5wYicLFF_eteQYAwKusRcAgVuZhOqjITFiAwqfKmpE9XeD_Fp1HkKdNAAtyh964ew6DA5Ow3=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>UniCrypi</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:137k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@UniCrypi">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/gwtg_iVlLuI93WBKxXKyRdsKrL6PAcec2EFYk8z_XMYi7XWc1rtQIBSyTt3jF1aynhveh0W3LJI=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>INFOtime</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:120k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@Sportmeikindigi">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/23ZGo9u9nx80jYDPOeb13ozPMuR6rK0JPLdFXMMghYK08qSPzk0j1kwk9IOOau2IgaoLTw9P=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Metamoonshots🚀</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:71,6k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/c/Metamoonshots">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/sWMloMmuk1jaTUrLCyWhnZoTxPDjfKaVmr7IJX1jwJ2Ot81LPZ6evDTO3iYK2zlmzewqCZ42H7s=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypta Man</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:47,4k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptamanNFT">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/AQC-lISAf0sAY1Zt3bddtr34I8OYh9pnMyjXcncMVQg1sX5KIof8Ky_c9yQ0a-4NHknjOpsG=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Pro Crypto Live</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:16,1k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/c/ProCryptoLive">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/N0ldzQqLo0QPO35CdDKcIKUH_yeo35xc11wY14gVxzVidQlI6WCJ8Gwpoc91W9iF3As2EcKkEA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Memocuk</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:98,7k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CRYPTOMEMOCUK">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/aKbtiDI_X3i8AkoI_WxdMJKGYpfVYTvJjMh-I3pZpTjXlWQNcUST_sahHRERrPnSvUVHTS6WTQ=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto Universe</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:8,55k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@CryptoUniverseYT">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/YQZbaoSPCry9a3gV5MDxIzgvmiZzQQmcReqN_Quk4hjOGg0Ng9diN8Nb7phNdU58182hH_VPow=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Mohamed Crypto</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:75,3k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@mohamed.crypto">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{
                  backgroundImage: `url(https://yt3.googleusercontent.com/dzRXDpjXjPbG371K10sqlTh8WCr4l3M70sN06Vo_k2PS6tfT6EF4Douvt9vKKIZITlqafcHTQA=s176-c-k-c0x00ffffff-no-rj)`,
                }}
              >
                <div className="cartInfo">
                  <h3>Crypto City</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Subscribers:160k</h3>
                <span></span>
                <div className="buttons">
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link to="https://www.youtube.com/@cryptocity006">
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
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
                  <Link>
                    <button onClick={alertMessage}>Statistic</button>
                  </Link>
                  <Link>
                    <button>Go to channel</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart" data-aos="fade-up">
              <div
                className="picture"
                style={{ backgroundImage: `url(${foto5})` }}
              >
                <div className="cartInfo">
                  <h3>Want to join?</h3>
                </div>
              </div>

              <div className="subscribers">
                <h3>Click to contact with us 👇🏻</h3>
                <span></span>
                <div className="buttons">
                  <Link to="https://t.me/CryptoFastYoutube">
                    <button> Join Us </button>
                  </Link>
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

export default Influencer;
