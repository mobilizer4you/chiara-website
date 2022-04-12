import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import usePathActiveHook from "../../hooks/path-active-hook";
import Image from "next/image";
type Props = {
  children: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  const pathName = usePathActiveHook();

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-lg navbar-dark bg-dark navbar-cstm fixed-top"
      >
        <div className="container">
          <Link href="/" passHref>
            <a className="navbar-brand">
              <VisuallyHidden>Home</VisuallyHidden>
              <div className="img__wrapper">
                <Image
                  src="/images/logo.svg"
                  layout="fixed"
                  width={166}
                  height={40}
                  alt="Multicolor tikstock text and a wifi symbol "
                />
              </div>
            </a>
          </Link>
          <Navbar.Toggle
            className="navbar-toggler"
            aria-controls="basic-navbar-nav"
          >
            <VisuallyHidden>Open Menu</VisuallyHidden>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="navbar-nav nav-links-cstm">
              <Nav.Item role="link">
                <Link href="/" passHref>
                  {/* TODO: Extract active logic */}
                  <a
                    className={`nav-link ${pathName === "/" ? "active" : null}`}
                  >
                    Home
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/about" passHref>
                  <a
                    className={`nav-link ${
                      pathName === "/about" ? "active" : null
                    }`}
                  >
                    About us
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/features" passHref>
                  <a
                    className={`nav-link ${
                      pathName === "/features" ? "active" : null
                    }`}
                  >
                    Features
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/pricing" passHref>
                  <a
                    className={`nav-link ${
                      pathName === "/pricing" ? "active" : null
                    }`}
                  >
                    Pricing Plan
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/help" passHref>
                  <a
                    className={`nav-link ${
                      pathName === "/help" ? "active" : null
                    }`}
                    href="help-center.html"
                  >
                    Help Center
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/sign-up" passHref>
                  <a className="nav-link btn-theme">Join us</a>
                </Link>
              </Nav.Item>
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
