import React from "react";
import Marquee from "react-fast-marquee";
const LogoMarquee = () => {
  return (
    <div
      className="logo-section mb-110 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>World's Leading Brands- our esteemed Clients</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2" id="clients-logos">
              <Marquee>
                <a href="#">
                  <img src="assets/img/clients/1.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/2.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/3.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/4.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/5.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/6.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/7.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/8.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/9.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/10.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/11.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/12.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/13.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/14.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/15.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/16.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/17.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/18.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/19.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/clients/20.jpg" alt="" />
                </a>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
