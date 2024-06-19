"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
  useWow();
  return (
    <MainLayout>
      <div
        className="portfolio-list-section scroll-margin pt-120 mb-120"
        id="portfolio-grid"
      >
        <div className="container">
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img src="/assets/img/portfolio/1.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <h5>
                    <Link href="#">
                      Interior Design Agency.
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Graphic Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Content Writing</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Software</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img src="/assets/img/portfolio/2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <h5>
                    <Link href="#">
                      Automibile Industry Agency.
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Content</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img src="/assets/img/portfolio/3.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <h5>
                    <Link href="#">
                      E-Commerce Website Development.
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Designing</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Packaging</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Branding</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img src="/assets/img/portfolio/4.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <h5>
                    <Link href="#">
                      Tour & Traveling Website.
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Graphic Designing</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Booking Portal </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img src="/assets/img/portfolio/5.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <h5>
                    <Link href="#">
                      Footwear Agency Website.
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Graphic Design</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img src="/assets/img/portfolio/6.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <h5>
                    <Link href="#">
                      Footwear Manufacturing Website.
                    </Link>
                  </h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Graphic Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Packaging</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;

export const metadata = {
  title: "Our Portfolio - Prakria Tech",
  description:
    "Explore Prakria Tech's portfolio to see our successful projects and case studies. Discover how our expertise in mobile apps, software, and web development can benefit your business.",
};
