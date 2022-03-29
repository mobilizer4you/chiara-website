import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
type Props = {
  children: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-lg navbar-dark bg-dark navbar-cstm fixed-top"
      >
        <div className="container">
          <Link href="/" passHref>
            <a className="navbar-brand" href="#">
              <VisuallyHidden>Home</VisuallyHidden>
              <img src="./images/logo.svg" alt="" />
            </a>
          </Link>
          <Navbar.Toggle
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <VisuallyHidden>Open Menu</VisuallyHidden>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
            in={open}
          >
            <Nav className="navbar-nav nav-links-cstm">
              <Nav.Link className="nav-item">
                <Link href="/" passHref>
                  {/* TODO: Extract active logic */}
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link href="/about" passHref>
                  <a className="nav-link ">About us</a>
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link href="/features" passHref>
                  <a className="nav-link">Features</a>
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link href="/pricing" passHref>
                  <a className="nav-link ">Pricing Plan</a>
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link href="/help" passHref>
                  <a className="nav-link" href="help-center.html">
                    Help Center
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link href="/signup" passHref>
                  <a className="nav-link btn-theme">Join us</a>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

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
