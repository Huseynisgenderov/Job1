import "./home.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import foto1 from "../../assets/images/free plan.png";
import foto2 from "../../assets/images/social reach.png";
import foto3 from "../../assets/images/signing contract.png";
import foto4 from "../../assets/images/research report.png";
import right1 from "../../assets/images/inforight.jpg";
import right2 from "../../assets/images/Image (1).jpg";
import user1 from "../../assets/images/User.jpg";
import user2 from "../../assets/images/User (1).jpg";
import userIcon from "../../assets/images/_.jpg";
import eth from "../../assets/images/ethimg.png";
import deyisen2 from "../../assets/images/deyisen2.png";
import foto5 from "../../assets/images/document settings.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <section className="home">
        <div className="heroContent">
          <div className="subTextHero" data-aos="fade-up">
            Welcome
          </div>
          <div className="content">
            <h2 data-aos="fade-up">The Best Crypto Agency in The World</h2>
            <h4 className="content_h4" data-aos="fade-up">
              Promote your crypto & NFT projects with PR's, advertorials,
              telegram groups on the biggest crypto news and influencers
              channels now!
            </h4>
            <Link to="/contact">
              <button data-aos="fade-up">Contact Us</button>
            </Link>
          </div>
          <img
            className="hero_img"
            src={deyisen2}
            alt="deyisen2"
            data-aos="fade-up"
          />
        </div>
      </section>
      <section className="whyUs">
        <div className="whyUsContent">
          <div className="whyUsLeft" data-aos="fade-up">
            <div className="subText">Why Us ?</div>
            <div className="headingExplanation" data-aos="fade-up">
              <h3>Deal Step by Step</h3>
            </div>
          </div>
          <div className="whyUsRight">
            <div className="rightContent" data-aos="fade-up">
              <div className="rightImage">
                <img src={foto1} alt="foto1" />
              </div>
              <div className="imgContent">
                <h4>Planning and preparation</h4>
                <p>
                  We arrange cooperation, assign a project team to you, and
                  together create a list of necessary requirements to achieve
                  goals and KPIs of the ad campaign
                </p>
              </div>
            </div>
            <div className="rightContent" data-aos="fade-up">
              <div className="rightImage">
                <img src={foto2} alt="foto2" />
              </div>
              <div className="imgContent">
                <h4>Influencers search</h4>
                <p>
                  We search for influencers that match your criteria, negotiate
                  with them, and come to the best terms for your product ad
                </p>
              </div>
            </div>
            <div className="rightContent" data-aos="fade-up">
              <div className="rightImage">
                <img src={foto3} alt="foto3" />
              </div>
              <div className="imgContent">
                <h4>Approval</h4>
                <p>
                  You select preferred influencers to work with, confirm the
                  terms of reference and the publication deadlines, as well as
                  draft ad videos
                </p>
              </div>
            </div>
            <div className="rightContent" data-aos="fade-up">
              <div className="rightImage">
                <img src={foto4} alt="foto4" />
              </div>
              <div className="imgContent">
                <h4>Contracts and publication</h4>
                <p>
                  We handle all of the legal paperwork with selected influencers
                  and control launch timing and compliance with the approved
                  draft
                </p>
              </div>
            </div>
            <div className="rightContent" data-aos="fade-up">
              <div className="rightImage">
                <img src={foto5} alt="foto5" />
              </div>
              <div className="imgContent">
                <h4>Reports and payments</h4>
                <p>
                  We only use one account for payment and offer secure payment
                  option. We are regulated by the state and we pay taxes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="information">
        <div className="background">
          <img className="leftImg" src={logo1} alt="logo" />
          <img className="rightImg" src={logo1} alt="logo" />
        </div>
        <div className="frontInfo" data-aos="fade-up">
          <div className="infoLeft">
            <div className="subText">Start To Grow</div>
            <h3>We provide full range marketing solutions in crypto-market</h3>
            <div className="infoLeftContent">
              <div className="infoLeftItem">
                <i class="fa-solid fa-pen-to-square"></i>
                <span>High quality content</span>
              </div>
              <div className="infoLeftItem">
                <i class="fa-solid fa-headset"></i>
                <span>Live support</span>
              </div>
              <div className="infoLeftItem">
                <i class="fa-solid fa-money-bill-wave"></i>
                <span>Suitable price</span>
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
            <span className="number">350+</span>
            <span className="cubic"></span>
            <span className="numberInfo">Videos released monthly</span>
          </div>
          <div className="infoRight">
            <span className="number">570+</span>
            <span className="cubic"></span>
            <span className="numberInfo">Projects worked with us</span>
          </div>
        </div>
      </section>
      <section className="partners" data-aos="fade-up">
        <h2>Partners shows reliability</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <div className="salam"></div>
          <SwiperSlide
            style={{
              backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABWVBMVEX////9ug39uQ8KDA4KDBD///0IDQz9///8uwsAAAAMDAz9uRANCg4JDA4AAAz//f8NChIAAAf///oAAA7/tgD/vQj3uAAFDwz/vxALDgv///f3uwD///H7uQ///+z//Ob9988AABQOBxnyvgD+xBn33ZYACQ8AEQrZpij4vSKdfyeMeBvxugD/+en878747bX01nzx02z0zWP6zFH5yVf546PxvCjvx0v04Zf39MT957LywEr5vkr81nr22obzxjf925z3wj733HHrvRP03oH65KL27rPv1Fn6yWfpqxxfSRH714UlFAxBJxA/LhDlvC0eDQg3JQ8gAAn7ui08IBHnqCYkDwkuIQlHPBt6Xx2Zch/dpS+gchMsJQyEZRjDmCnFpTLKlBZaQBbWrypyXBSVZBY0Kg13Ux4eFwpURRV6ZRSaghuVdyomAAupgh/z0UWZaBezmDGygiq9AD4RAAATqElEQVR4nO2d63/TxraGNWNLGlm2bMmSLEdR7BDj2mAcEsAkgSRkQ6AhaSmkbA7hVkh7ml047Lb//4ezRvJFvsjWpCA5/PR+KSQh9Txa885aa0YSxyVKlChRokSJEiVKlChRokSJEiVKlChRojlWPi+KvCjSP8IfQL1vwBd5jQ/+h9+MYMgw/sVKe3Xj8vW19Rs37ty5c/Pm9eu3VjeriyInxv35vqq6l16rbF5ev9NpmUQHGVQI6a7M49vbG5vXNPipXqB8Y+J5Uats7dyRTaSjUWFPLoq721vXNP5bRMDx1Z1dR0cG6Y54EoMeB3v3XvubgiDmYQa0D/dMAkLEtonj0D8FMEDud3T57uW2Rl0z7o//D+V5vCgurt5EhkEsGL9tWRZxFcSgh8LQjfXVxQuOAFY9utKJlZ0VGDImIwpm4H1FRgQ7uxsVWCou7HpJV35RXKhum7Y5Ov5RBMHS7X+1xYtqkG76I1a3VwCBfX4GyHTMnUrcgzmn6OpW2YbByq4DnpsBjQV9Z0m7mAmDtn/f7o31HzEAi+hsXbgVgufyXPsOtpBM0GgqcB4RHd+u8hfMG7XKdd1wRz+eD52Pgt06vDgLpVsHVndbtjyy2v0j2eAKu23uYiRNNCfQHniJ4BdkAL8M1oh9LZ+Pe4Az5V6lpds6+fIMQE5r/Zo497ZAGax2sG8afEkGmOBOm8/POQMur22YRP5KDGiqID/k5jltpLmx9oA4+OsxIMRobcy1MWqc9j1Nfr4eA5gP+srOwvwiEMWlR7YNM0GW0ddjIOvmddqTnEtXEMVrt22MHDrmrxcHiHaavl+cz9kgipVH5tgs+PIMwBSQ/v0CN4ctaFFcfGQ7xGFkICObsCICBnh7Yf4iQeS0R63JQTCNAZYNC7GHCbHNbX7uNiNE7rrpOEEQggdjHDy+LzNDIC3ZPuTnyxbznHgZZgFrHGBsHBypP3Qslm5CV4a5P19rgyY+bBkTmsOz4gAQLJfUH58Y7AyQbW5y3BzVDmL1eEoUBDAwUO3gSEmXAUIHMRsj/PPjyvwQgEpxTw8GEMAA0ygoplJChkI4x3Qw9N2FuYkDUVtHzAwwsp4fFS8VsplMqaT8eCwzM0Cy/UDT4h58T7dsZ3JeEMiAfg2ioFAoZFOZXCqn/NCx2SFg+2HcQ3cFxWJblgNyoylxQA5+Wr5EGWRTqRREwtMnCDFnCkazws1BJPC8tqezMjCQ0QA7LPQYpASIhGOD3RP09XmYDXlxXzdt1jgwnh8tp9PpLBBwGUAoFH/snAfCatwAOLql6mDC5Acwc6yDZ2CH6XRqoJJQfHqMmBMF63gONuLE9ZEe8uw4ADs8W3btMCcIQp+CUPzhicXKgOiHfMzTIc9tthx3Jy0sA0JrBLoojjEo0TxBZkyWsOFsxtxkzVNDZGRgHGS6djjMIJXLKT8fMO1EUhm3Y86T+IcOZmGAIQrADmE1oHY4wiAlQLLUQYx5M2nFnCRUOuMN1CkMZBkZp/+G1Cjr2qEgDDPIeUukzTYd9Bt8Ps6jnfsmEwO4as+fUTsspD0AwwzcJfIpYxWJycoWFK4xARBFqJUYGMBUh9TItcNgBgABjHH8BGMwA5vcjq+xJor7Uyvm8TiwGj8pkBhROwxgAF9Xfj5mrCJb8SVKorjnXYlQDMA6redQI3TtMJBBuaS+6GCm2sG+wXNxOcLm9Ip5lIHR+KnYKxByQhCDHCyRPxxYLIsDcapxlU78uj57WewzIAgqRS8tEPxSRiHAEll8wWKMWNYPuVjOJYhiW8ehGRhEBi8ojDEoqP+jpEchlKF2OEDhjVFGzWvxnM0Qd8KkiL0wgImgpqgd+pYEkHrl/ktpDALUDk+Z2mt4PxYE+UVIk93hzWRAK8Xnz9RUKpum6ntBqaye1OzaS7U0yqBUUl506KG2kAz0G/H4QdUJkxp4DNCrMzWTyXQZ9FSWrjRh3pOXam4sEqB26NRCxwGxq7EwuK6HY0Av5nOYCJRBKudnoF6pGchAcnMCBKgd3nSMsEskse/FkSWJuyESA4oA5nUjq2Q9Br44KKh/Wl33r71UxnMlWkUaYZdI424MCLiqicKkRxgTaoe5rJcb9eJAgCj4WOu7nvNSHTfGEosx4krkO28ad1nvnTqewcBqPFPd1iFl0IsDsMPXdCJ0hyjX3k4wRkF5cxASAUIPI68ZeP5m//j1DAZNqdglkPU8kSojXakNzXXrrTRujGn1Teju2nbkhiAuNgm9NSkEA+udWi+MMCgoYIdDW0vYequOeEImV5caoeNgT4s8Taqath2KAVzi99LyMIO6emLRu3WGZI2uDmVF+sUKmyFgHH2DecMOyQAGUXunFtIDBqm0crVGD68NL3wYlsihdaEuvaqh0MkiWY18MqyTsH4AK4P1Xr10qecJuZLyujYpBcTkrdQ3RqFUV39hKh4Po0awsGeEZ+B5gkcAnEG6annZ1dg4wBN6S2Su/lOjxtJKMe5EHQeVFprOgH6sQR5JPSHtGiPY4Wewwy4D9w6+QX3YN0ZBqKsN2ddnl2fuzRudxYgZtLEzgwEePpxjvZNcBrAi+K6um0b6r3bzrWuMAthhDflue5q9FWnoUd8efAvL0xjI9IjFgeVvhNTeKXWonIuQFwyuKTGczyvYf70hY8yVqB0O3fplPH8+0xtw1AwO0bR6CSLXaihPD3oJTnc6qMtp5bVFj7X3GTQ/SC9rxPENBZKl74rZXwyMBmsCbmSOTmce0tiKOFt+ZEytGWnLRFp+2rR8DBAYIyyKxNun977hfCjWlV/v68MZo/qsMZQeGo0ztfjmdNbey464ECmD3SlH8eD6WVAmlQvqj8c11828L1vW+9c9O8TUDmvNx2qhXFJ/bWJfpGPrt1f+1AjjRrlOmyqnM9pr63yErgjViUOCj13AKBoS7RcIytNjGtPdOED+GosmSM0PShlUkn5v2oMLT+gN8n4LbJSVNN2QPZteRRp7UW7Ci6JmGgEM6GS3Xj2T6BKXuaT84O6XdEcNWVAvKOjUcB6rl7KZcvm7kvSyKftSZ//jEbDRKKspYFAqqWedqcd6m1FWDKJYsa2AJQEYWI2sksmkMnQTQfnfjuUMrr7v5xBMhKzbWYGAUX9v+lcL30IBE6HoblHTfYejJ9OMsbUQKYNrgQwwMZ4XJHdk8LmFwvJTeqQADzOgl9P5oLgJg8sAPOH+xEsMUVD3mi85SvTs1AiOBDvKG2F5sR3EgNphQS2XuwxyubTytONlBP5YkW2IgtSAQVlQXzaN8RoCokBJ9RjkyoLy86kRaIxmlJUjL1bNoDgwXqlSyhtZyusbLr84MMYmA0SBkEn1GIBKAMEetTzqBelsnwGoOM0Yozy/zHPVgDgAOyyoGWqHIO9Tp8EYO8bwqS2j+UG9lCpnutuv4B0CGONjZ+RhOagh1XPuEb60ZwgQCcWzwPYaibaDEBgHDRXsEK4t3ULxEICUs+ZwGNj/kUqFjJDqldMp+vM56dfhjgk+kIpuw8HXg0unl7PN+WZAk7wMDYIhBupngkcLKGGEQVmoCyONM1pFpoeVLaTVk6C5EC0DsR0UB24LYJhBXfnbMoYZEPJeFYYZlOrCeOPM+k3KDTEoZKVPtaCVwYz0foZABjIyan+ow3Oh+LHWz5d7pDB5J9U9P3AZCEI925iw9lufhiMhBwgCd+WjZjDZE93jh7XflHKpx8DdRxgUA72fk2l7bflSLxDKJaVwKtNYGR1X7UQqDaIgTaMgMEFwluYhDugngVLoD0noMgCj++jfR+jHgdtjrPcYpJb/r2ENfsVQJJxIgzAABFPaCOZShAg4sRLMwEBW7a2achnAkkAbZ7gHgPQfC0Av8XvJ6zFmcvVnDdn3K7Dsy5XlE1XwFoeS+mkFT6ma7ChzZc6tGwMYIPownC6EgvrZ1wigbQUfA9pUcSHkitKphbtH372f9I+0GwnZrHSlhqf12jsREqBqTmEA+TIYo1Aq57z2af9DGrLbXutf7pV3qgo5Uv2nV4Z3r7j3DevA8UqKLjrnRE2nXDsMHj/VDTHarup/p5+ZMshbFYrdzzX/+TKr+eGoY6HBEkHoDlS9WDg1/BhxQ6JVpK+RTI1RoFEwtZGkr0XcS1ubUr+BZLpESp9rxPHFrvOhqPx8YPlWSWqMyrNTR/chgBqhJP16H/mb6TAdpCuWPtE0BwwuR9xT3ZjOwF0iX9dsp9ctpY2zD2qh4B4p6O87wKR5f3Yqg1UOIDTU+ne0vSY7/n2HP/+sERtNZUC2okXAbc3q90O2ZBGnP6tlr3GWEpQXvqPu9BLbNdNvKQ1JoRtt6u8jVST9y/Q4MNsRM2ibMxiAMRJq9b2/QrF8CcppIV08Ouj3Y+l3DP8jZEijLGTd2z6lxzXs8wTca0sGMsBO1BvPS/dnMEBuC7X3iWmxDGMTaGupePTE6t8DhoaT6IZadFsKgttec5huft2Neq+Nu8Hy8agdFvqtEJgO9PQBHpPR8LIm2nwol9THITgPpN+MGgH3YNZk6AnqKNuNgn5bMKccNYzx+x5kiIJ6v7UklAT1cZPh+DreiPzM8q2wDEDUDjOZQUtMoFsFY3s0sCIo3UraazYLyuPx9lowg2rkZ3EqoS+Q2zjLlGn3sNsRywnq0dBeJI0C0p0IbiPOPY4ESdZjZ+qv9iNwIj+2LWp7YT9d80e1lPU6zZneKZPc8tmpNXTaWW5kil6kDE7jpFLqf0KfS7sZ9ZksURO3wx6ttyBtTo8wSNGjhxZNG1DPDr36yTvE6v1MNiVIn8MywJejfk49ZOarYRkY1m+qMMqAdslPrT4DuecFQwy8SjGczCoX/aN3K62Qt5pgVPtDGWUAFIpuJCAvCsp17yirn0FJurIS8v8hI2chH8Pj9G6E/HwECqg/1bIwwkAQ1H8/oQ+IcmSIArqP4DJI9RBkc26lGHJdsLfpFmDUDLSt0KsjFEyfpNE4oJFwBhAcRF5JSncfoXuAkX4zBVEQ9n/g3t7HR8+AqwTtdUyAYNQ+KancKIOS+uLAIlYjW0+PMMhmSjQKwicHncVYGHDr4S8TMowTuu+QGoaQK2ZOaw2pmB1jMLNxNqIdLhYG+dArA6KRsHJVyWRGj6YL6pu/lGJ2hEE2R6OA5YAmvZUnhps8RW5xl+FTIjBGpTzKIJeqq/V01veVfvtUD52IIqyva92HW0euDQYEUBLV/phw79aovH0EenPD1IbJkAi+xWm8/1VPkUmsMD2pAIzxREnPogAESl4UhGdgN5e4BS0eBuI2AwL3eZFXJ9y2NMIgJ8Ci2EUQkoG5w3cVOQN6HIXpkRWuMeaEqaGQq0t/u24YmgEhdiUfFwPQms72pALDOpHGjNGvbIqhRnCFbftQjJMBYyAgmUCyNI2BIH1kWhThV+qtiqjFyIBfY8gR6AdGVu21Ug+ikPuOJsiMjwcyH3B8bH7A0fdtMLTUPFFjDIqC76TPK6xvayGta/EyEMXD8Em9JzDGEyUzdkOnNxE+W4hYbAjQ/gBBTM8DqTSZH/4ItYOUGSeQyUofVxBjFNjkzhIf++MD9zFLbUMlo+YEY8xRO7RYZ0ILb3L0CfSxPnU7Lz7SGU2MbkWOGSOUSR9riLAyMNfoBIiZASRK7M8Axah2dSQSwA4hCpjjoFPJewhiZcCL93SGGs+VLNMl0m+MYIekf7dgeJa6u98eNwOKYZ2wv17AsD75jbFnh4xxsBbvyAcSK83pJzImCSLhitLdUBGoFwzuHQ792AeYCbEvCV2J3FbrHI/JNtCJWncRCNJfEAU2IwOi36/m54UBaKfF/hYF2aDGmKN2+Lc/CsIywPo+N0ev7eK1NZP5YeFu7aCWy2Xpo4URkw3QZoSNH3ALc8SA4xZ32YonbyDIuiqVaV5wjn9rP9Lyc/XKLl6sdM4xG7BRO5H+YusXuIJ1dK8izhcD8MV2i31xoKNprDhO6FMGXcky6rS5+IqkiaLvr11dYU2V3GduGwixM0DHbfrO47liQNNFbnOFPWl2D6Yx/iMik2Y17gFPVp7bOkcknEMykjfdCIg/RZ6grRWDsY5mFrExarbzc8tA5FaJfo41kg2CflzN593EYB4Z0Dcan+cVOwxykN5pL4jzy4A2dCq7XzMSMNZvVsS5eRvPRAGFpe+/GgOMdHN7QZyzJXFUEJv5xX37XNnSbAR4pbWhzV1aMEELC/xm5+uEgn68yuVj7KGHFb8AJX113SHhTxqHESEyMrfpoaN5S5EDJW40mV+oMVW2pR9Hfa/OPxOv5Sv/NWm69KWMQZe3r83fQjhVIn2dYccy0DlewzZBBN+dh/cwsUtc2DC/jDfqzY2li+EBo9J4rrrWMpEx+7l/U4R1vXlYgdl1IRm4qmzLXiyc2yHtw2v8BUgJAsVDBVFZM5GBJjzaYFYAEIINvblToZkxP9/p8QzxUEJc3nOYt+PoJHD2blVE0csHLjQDikGrrjVZ7VHvXK9ymhbz8YovI3dVF/nFzbUW0nV75okN+kwVYjbX2vSWzbhPmHxZAYqlzXt35ZmVta637hyuLrnjj/eg0VcQpPqcVtm6frtpm+CQOnLfzECIdw4N/E/XiX68fnmL3rcsehXyt8aAis4LbbFa3b++fqfZNE0T0c0F+K/Zuf1o+95mZQFGm/dE//AtMnDDO+/debS4VKm0XVWrlYr3KFRtYYEf/vlvj0GiRIkSJUqUKFGiRIkSJUqUKFGiRIkSJbrg+n+ooxzYwV0fagAAAABJRU5ErkJggg==")`,
            }}
          >
            <h3 className="title">Binance</h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("data:image/png;base64,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")`,
            }}
          >
            <h3 className="title">Coingecko</h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("https://seeklogo.com/images/P/pinksale-logo-C26E3C2FC3-seeklogo.com.png")`,
            }}
          >
            <h3 className="title">Pinksale</h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("https://play-lh.googleusercontent.com/LbBD8HKpet4ljOwEprkUsD2VwLkIEDvqJUTZ-655mSen5zz-RqkrYHFznPd5Ak4OOqg")`,
            }}
          >
            <h3 className="title">Gate io</h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("https://nftsdaily.io/wp-content/uploads/2022/04/Trust-Wallet.png")`,
            }}
          >
            <h3 className="title">TrustWallet</h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("https://logowik.com/content/uploads/images/metamask-fox-icon-in-flat-style2194.logowik.com.webp")`,
            }}
          >
            <h3 className="title">MetaMask</h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("https://img.api.cryptorank.io/coins/mx_token1669213491700.png")`,
            }}
          >
            <h3 className="title">Mexc</h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("data:image/png;base64,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")`,
            }}
          >
            <h3 className="title" style={{ color: "#7e7e7e" }}>
              CoinMarketCap
            </h3>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url("https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png")`,
            }}
          >
            <h3 className="title">CoinBase</h3>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="customer">
        <div className="customerContent">
          <div className="subText" data-aos="fade-up">
            Testimonial
          </div>
          <h2 data-aos="fade-up">What Our Customer Say </h2>
          <div className="comments" data-aos="fade-up">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="commentSwiper"
            >
              <SwiperSlide>
                <div className="comment" style={{ backgroundColor: "#FFEA11" }}>
                  <div className="commentContent">
                    <div className="userInfo">
                      <div className="infoPack">
                        <img className="user" src={user1} alt="user1" />
                        <div className="userName">
                          <h3>Kathleen Smith</h3>
                        </div>
                      </div>
                      <img className="userIcon" src={userIcon} alt="" />
                    </div>
                    <div className="commentSide">
                      <p>
                        "Big fan of CryptoFast! Their promotions keep me in the
                        loop about crypto trends and opportunities. Kudos to the
                        team for making the crypto journey exciting and
                        accessible! 🚀 #CryptoFast #Cryptocurrency"
                      </p>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment" style={{ backgroundColor: "#355764" }}>
                  <div className="commentContent">
                    <div className="userInfo">
                      <div className="infoPack">
                        <img className="user" src={user2} alt="user1" />
                        <div className="userName">
                          <h3>Michael Davis</h3>
                        </div>
                      </div>
                      <img className="userIcon" src={userIcon} alt="" />
                    </div>
                    <div className="commentSide">
                      <p style={{ color: "#fff" }}>
                        "CryptoFast, you rock! Your promotions have helped me
                        make informed decisions in the crypto market. Grateful
                        for the valuable insights and opportunities you bring to
                        us. Keep up the fantastic work! 🙌 #CryptoFast
                        #SmartInvesting"
                      </p>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment" style={{ backgroundColor: "#FFEA11" }}>
                  <div className="commentContent">
                    <div className="userInfo">
                      <div className="infoPack">
                        <img
                          className="user"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznLIYbDMMsgUi0K-GlJJrhsxNzRT7YypVD8kqserKBc4yWxZnyzfBDsfIHM9r_sEpjIs&usqp=CAU"
                          alt="user1"
                        />
                        <div className="userName">
                          <h3>Lachlan Thorne</h3>
                        </div>
                      </div>
                      <img className="userIcon" src={userIcon} alt="" />
                    </div>
                    <div className="commentSide">
                      <p>
                        "Impressed with CryptoFast's promotions! They make
                        understanding crypto trends so much easier. It's like
                        having a knowledgeable friend guiding you. Way to go,
                        CryptoFast team! 👏 #CryptoFast #CryptoCommunity"
                      </p>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment" style={{ backgroundColor: "#355764" }}>
                  <div className="commentContent">
                    <div className="userInfo">
                      <div className="infoPack">
                        <img
                          className="user"
                          src="https://img.freepik.com/free-photo/portrait-young-bearded-man-looking-camera_23-2148187159.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais"
                          alt="user1"
                        />
                        <div className="userName">
                          <h3>Lukas Müller</h3>
                        </div>
                      </div>
                      <img className="userIcon" src={userIcon} alt="" />
                    </div>
                    <div className="commentSide">
                      <p style={{ color: "#fff" }}>
                        "CryptoFast is my go-to for all things crypto! Their
                        promotions are not only informative but also super
                        engaging. Thanks for keeping us updated and inspired! 🚀
                        #CryptoFast #CryptoEnthusiast"
                      </p>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment" style={{ backgroundColor: "#FFEA11" }}>
                  <div className="commentContent">
                    <div className="userInfo">
                      <div className="infoPack">
                        <img
                          className="user"
                          src="https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg"
                          alt="user1"
                        />
                        <div className="userName">
                          <h3>Mateo Rossi</h3>
                        </div>
                      </div>
                      <img className="userIcon" src={userIcon} alt="" />
                    </div>
                    <div className="commentSide">
                      <p>
                        "Just joined CryptoFast and I'm loving the crypto
                        journey! Their promotions are on point, guiding me
                        through the crypto world effortlessly. Exciting times
                        ahead! 🌟 #CryptoFast #CryptoNewbie"
                      </p>
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <img className="ethImg" src={eth} alt="eth" />
      </section>
    </>
  );
};

export default Home;
