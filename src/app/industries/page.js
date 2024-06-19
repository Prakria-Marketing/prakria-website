"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import React from "react";
import Industries from "../../data/industries.json";

const IndustryPage = () => {
  useWow();

  return (
    <MainLayout>
      <div
        className="industry-card-section scroll-margin pt-120 mb-120"
        id="industry-card-section"
      >
        <div className="container">
          <div className="row g-4">
            {Industries.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="industry-card">
                    <div className="industry-img">
                      <img
                        src={`/assets/img/industries/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="industry-content">
                      <h5 style={{textTransform:"uppercase"}}>{item.title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="home1-about-section mb-110">
        <div className="container">
          <div className="row mb-60">
            <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title5">
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  How We Do
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  How to Find an Industry Expertise{" "}
                  <span> for IT Professionals.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bottom-area">
          <div className="container-fluid">
            <div className="row g-5">
              <div
                className="col-lg-4 col-md-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="/assets/img/home1/icon/about-feature-card-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Expertise and Innovation</h4>
                    <p>
                    With a focus on constant innovation and redefining possible scenarios, we pride ourselves on staying relevant, & up-to-date with cutting edge technology
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="/assets/img/home1/icon/about-feature-card-icon2.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Transparent Process</h4>
                    <p>
                    Through our transparent delivery process, we aim to demystify the process from conception to completion.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="/assets/img/home1/icon/about-feature-card-icon3.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Client-Centric Approach</h4>
                    <p>
                    We are dedicated to listening & collaborating with you, making sure that each interaction leads towards your success.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IndustryPage;


export const metadata = {
  title: "Industries We Serve - Prakria Tech",
  description:
    "Discover the diverse industries Prakria Tech serves. From healthcare to finance, learn how our customized technology solutions cater to various sectors and drive business success.",
};