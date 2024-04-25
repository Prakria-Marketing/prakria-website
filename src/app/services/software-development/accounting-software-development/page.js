import MainLayout from "@/components/layout/MainLayout";
import React from "react";

function CustomCrmDevelopment() {
  return (
    <MainLayout>
      <div
        className="service-details-page pt-120 mb-120"
        id="service-details-section"
      >
        <div className="container">
          <div className="service-details-top-area mb-80">
            <div className="row g-lg-4 gy-5 align-items-center">
              <div
                className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-top-content">
                  <h2>
                    Accounting Software<span>Development.</span>
                  </h2>
                  <p>
                    In today’s fast-paced business environment, effective
                    financial management is crucial. At PRAKRIA, we specialize
                    in developing bespoke accounting software that simplifies
                    complex financial processes, enhances accuracy, and provides
                    insightful analytics to drive your business forward.
                  </p>
                  <h6>Our Accounting Software Development Services Include:</h6>
                  <ul>
                    <li>
                      <p>
                        1). Customized Financial Solutions: Tailored to meet the
                        unique needs of your business, our custom solutions
                        ensure that you have the features and functionalities
                        that matter most, from general ledger management to
                        complex financial reporting.
                      </p>
                    </li>
                    <li>
                      <p>
                        2). Integration Capabilities: Seamlessly integrate your
                        accounting software with other critical business systems
                        like CRM, ERP, and eCommerce platforms to enhance data
                        consistency and operational efficiency.
                      </p>
                    </li>
                    <li>
                      <p>
                        3). Compliance and Security: Our software complies with
                        the latest financial regulations and is built with
                        robust security features to protect your sensitive
                        financial data.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-img">
                  <img
                    src="/assets/img/innerservices/adaptive-ai/1.jpg"
                    alt="ai & ml development"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="service-details-faq-area wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-lg-4 gy-5 align-items-xl-center">
              <div className="col-lg-6">
                <div className="service-details-faq-img">
                  <img
                    src="/assets/img/innerservices/adaptive-ai/2.jpg"
                    alt="ai & ml development"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="accordion" id="accordionTravel">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseOne"
                          aria-expanded="true"
                          aria-controls="faqcollapseOne"
                        >
                          01. What is software development?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Software development is the process of conceiving,
                          specifying, designing, programming, documenting,
                          testing, and bug fixing involved in creating and
                          maintaining applications, frameworks, or other
                          software components.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseTwo"
                          aria-expanded="false"
                          aria-controls="faqcollapseTwo"
                        >
                          02. What are the key phases of software development?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          The typical phases include:<br></br>
                          Requirement analysis to understand what users need
                          from the software.<br></br>
                          System design where the system’s architecture and
                          design are detailed.<br></br>
                          Implementation (coding) where developers write the
                          code according to the design.<br></br>
                          Testing to ensure the software works as intended.
                          <br></br>
                          Deployment to make the software available for use.
                          <br></br>
                          Maintenance to fix issues and improve the software
                          over time.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseThree"
                          aria-expanded="false"
                          aria-controls="faqcollapseThree"
                        >
                          03. What are some common types of software
                          development?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Application Development – Creating desktop, mobile, or
                          web applications.<br></br>
                          Systems Development – Building and integrating system
                          components.<br></br>
                          Web Development – Developing applications on the web.
                          <br></br>
                          Database Development – Design and management of
                          database architecture.<br></br>
                          API Development – Creating APIs that allow different
                          software to interact.<br></br>
                          Embedded Systems Development – Programming of software
                          to control devices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseFour"
                          aria-expanded="false"
                          aria-controls="faqcollapseFour"
                        >
                          04. What programming languages are most commonly used
                          in software development?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Languages such as JavaScript, Python, Java, C#, Ruby,
                          and PHP are widely used due to their robust
                          frameworks, libraries, and support for a range of
                          applications from web development to cloud
                          applications.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingFive">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseFive"
                          aria-expanded="true"
                          aria-controls="faqcollapseFive"
                        >
                          05. What are software development frameworks?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Frameworks are sets of pre-written code libraries and
                          tools that developers use to create applications. They
                          provide a foundation on which software projects can be
                          built. Examples include React for web development,
                          Django for Python applications, and .NET for Windows
                          applications.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CustomCrmDevelopment;
