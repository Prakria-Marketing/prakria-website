import Link from "next/link";
import React from "react";

function Thankyou() {
  return (
    <div id="thank-you">
      <div
        className="container-fluid p-0 mt-auto text-center position-absolute"
        style={{ top: "30%" }}
      >
        <h1 id="thankh1" style={{ fontSize: "100px" }}>THANK YOU!</h1>
        <h2>
          Your message has been sent successfully. <br></br>We will get back to
          you soon.
        </h2>
        <Link
          href="/"
          className="primary-btn2 wow animate fadeInRight mt-3"
          data-text="🡐 Return to Home"
        >
          <span>🡐 Return to Home</span>
        </Link>
      </div>
    </div>
  );
}

export default Thankyou;
