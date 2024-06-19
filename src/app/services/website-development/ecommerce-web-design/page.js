import MainLayout from "@/components/layout/MainLayout";
import React from "react";

function EcommerceDesign() {
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
                    E-Commerce<span>Web Design.</span>
                  </h2>
                  <p>
                  A well-designed e-commerce store with an easy-to-use user interface is your only weapon in this fiercely competitive market, where hundreds of new e-retail businesses are opening every day and retail e-commerce is expected to reach $9.88 trillion in sales by 2024. These days, beating the competition, attracting customers, and generating great revenue require more than just eye-catching visuals, a flashy presentation, and strategically placed call-to-actions. Instead, you need an e-commerce store that is masterfully designed and incredibly functional. Over 5,00 e-commerce stores that give the best user experience, go above and beyond what customers want, and increase return on investment have been created and implemented by us thus far.
                   </p>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-img">
                  <img
                    src="/assets/img/innerservices/website-development/ecommerce-web-design/1.jpg"
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
                    src="/assets/img/innerservices/website-development/ecommerce-web-design/2.jpg"
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
                          01. What is web development?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Web development is the process of building and
                          maintaining websites; it’s the work happening behind
                          the scenes to make a website look great, work fast,
                          and perform well with a seamless user experience. Web
                          developers do this by using a variety of coding
                          languages, depending on the tasks they are performing
                          and the platforms on which they are working.
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
                          02. What are the different types of web development?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingTwo"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Front-end development involves building the parts of a
                          website that users interact with directly. It's
                          primarily concerned with the look and feel of a
                          website.<br></br>
                          Back-end development focuses on the server-side of a
                          website. It manages the database through queries and
                          APIs by client-side commands.<br></br>
                          Full-stack development combines both front-end and
                          back-end development. Full-stack developers are
                          knowledgeable in both spheres and can build complete
                          web applications.
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
                          03. What tools do web developers use?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingThree"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Developers use a variety of tools including text
                          editors (e.g., VSCode, Sublime Text), version control
                          systems (e.g., Git), browsers for testing (e.g.,
                          Chrome, Firefox), and frameworks/libraries (e.g.,
                          React for front-end, Node.js for back-end).
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
                          04. What are the most common programming languages
                          used in web development?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFour"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          HTML (HyperText Markup Language) for structuring
                          content on the web.<br></br>
                          CSS (Cascading Style Sheets) for styling content.
                          <br></br>
                          JavaScript for making web pages interactive.<br></br>
                          For the back-end, languages like PHP, Python, Ruby,
                          Java, and Node.js are widely used.
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
                          05. How important is website security?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="faqheadingFive"
                        data-bs-parent="#accordionTravel"
                      >
                        <div className="accordion-body">
                          Extremely important. Ensuring a website is secure
                          protects it from hacking, data theft, and other
                          malicious activities. Common practices include using
                          HTTPS, implementing data encryption, regular security
                          audits, and following best practices for secure
                          coding.
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

export default EcommerceDesign;

export const metadata = {
  title: "E-Commerce Web Design Services - Prakria Tech",
  description:
    "Drive sales with our e-commerce web design services. We design and develop engaging, user-friendly online stores to enhance your customer's shopping experience.",
};