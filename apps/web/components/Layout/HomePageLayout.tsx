import React from "react";

type Props = {
  children: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-cstm fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="sr-only">Home</span>
            <img src="./images/logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-links-cstm">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="about.html">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="features.html">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="pricing.html">
                  Pricing Plan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="help-center.html">
                  Help Center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-theme" href="#">
                  Join us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      {children}
      <footer className="text-center">
        <div className="container">
          <h1>Subscribe to join</h1>
          <p>
            Our global community is taking shape. Sign up now to join the
            movement to create more livable cities.
          </p>
          <button className="btn-theme subscribe">Subscribe</button>
        </div>
      </footer>
    </>
  );
};

export default HomePageLayout;
