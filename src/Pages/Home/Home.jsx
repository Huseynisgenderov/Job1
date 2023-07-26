import "./home.scss";
import foto1 from "../../assets/images/free plan.png";
import foto2 from "../../assets/images/social reach.png";
import foto3 from "../../assets/images/signing contract.png";
import foto4 from "../../assets/images/research report.png";
import icon1 from "../../assets/images/Icon.jpg";
import icon2 from "../../assets/images/icon1.jpg";
import right1 from "../../assets/images/Image.jpg";
import right2 from "../../assets/images/Image (1).jpg";
import partner from "../../assets/images/partner.jpg";
import user1 from "../../assets/images/User.jpg";
import user2 from "../../assets/images/User (1).jpg";
import userIcon from "../../assets/images/_.jpg";
import eth from "../../assets/images/ethimg.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="heroContent">
          <div className="subTextHero">General idea</div>
          <div className="content">
            <h2>Slogan</h2>
            <h4>Explaining</h4>
            <button>Contact Us</button>
          </div>
        </div>
      </section>
      <section className="whyUs">
        <div className="whyUsContent">
          <div className="whyUsLeft">
            <div className="subText">Why Us ?</div>
            <div className="headingExplanation">
              <h3>Deal Step by Step</h3>
            </div>
          </div>
          <div className="whyUsRight">
            <div className="rightContent">
              <div className="rightImage">
                <img src={foto1} alt="foto1" />
              </div>
              <div className="imgContent">
                <h4>Planning and preparation</h4>
                <p>someting...</p>
              </div>
            </div>
            <div className="rightContent">
              <div className="rightImage">
                <img src={foto2} alt="foto1" />
              </div>
              <div className="imgContent">
                <h4>Planning and preparation</h4>
                <p>someting...</p>
              </div>
            </div>
            <div className="rightContent">
              <div className="rightImage">
                <img src={foto3} alt="foto1" />
              </div>
              <div className="imgContent">
                <h4>Planning and preparation</h4>
                <p>someting...</p>
              </div>
            </div>
            <div className="rightContent">
              <div className="rightImage">
                <img src={foto4} alt="foto1" />
              </div>
              <div className="imgContent">
                <h4>Planning and preparation</h4>
                <p>someting...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="information">
        <div className="background"></div>
        <div className="frontInfo">
          <div className="infoLeft">
            <div className="subText">Start To Grow</div>
            <h3>We provide full range marketing solutions in crypto-market</h3>
            <p>Bla Bla Bla</p>
            <div className="infoLeftContent">
              <div className="infoLeftItem">
                <img src={icon1} alt="icon1" />
                <span>High quality content</span>
              </div>
              <div className="infoLeftItem">
                <img src={icon2} alt="icon2" />
                <span>Live support and data</span>
              </div>
            </div>
          </div>
          <div className="infoRight">
            <img className="notebook" src={right1} alt="right1" />
            <img className="eth" src={right2} alt="right2" />
          </div>
        </div>
        <div className="infoAmount">
          <div className="infoLeft">
            <span className="number">200+</span>
            <span className="cubic"></span>
            <span className="numberInfo">Videos relaised monthly</span>
          </div>
          <div className="infoRight">
            <span className="number">500+</span>
            <span className="cubic"></span>
            <span className="numberInfo">Project worked with us</span>
          </div>
        </div>
      </section>
      <section className="partners">
        <h2>Partners shows reliability</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${partner})` }}>
            <h3 className="title">Partner 1</h3>
            <span className="swiperInfo">Partner info</span>
          </SwiperSlide>
        </Swiper>
        <div className="buttondiv">
          <button className="button">Show More</button>
        </div>
        <div className="background"></div>
      </section>
      <section className="customer">
        <div className="customerContent">
          <div className="subText">Testimonial</div>
          <h2>What Our Customer Say </h2>
          <div className="comments">
            <div className="comment" style={{ backgroundColor: '#FFEA11' }}>
              <div className="commentContent">
                <div className="userInfo">
                  <div className="infoPack">
                    <img className="user" src={user1} alt="user1" />
                    <div className="userName">
                      <h3>Kathleen Smith</h3>
                      <p>Fuel Company</p>
                    </div>
                  </div>
                  <img className="userIcon" src={userIcon} alt="" />
                </div>
                <div className="commentSide">
                  <p>blablablabal</p>
                  <div className="rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment" style={{ backgroundColor: '#355764' }}>
              <div className="commentContent">
                <div className="userInfo">
                  <div className="infoPack">
                    <img className="user" src={user2} alt="user1" />
                    <div className="userName">
                      <h3>John Martin</h3>
                      <p>Restoration Company</p>
                    </div>
                  </div>
                  <img className="userIcon" src={userIcon} alt="" />
                </div>
                <div className="commentSide">
                  <p style={{ color: '#fff' }}>blablablabal</p>
                  <div className="rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="ethImg" src={eth} alt="eth" />
      </section>
    </>
  );
};

export default Home;