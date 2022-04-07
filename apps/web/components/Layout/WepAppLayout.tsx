import React from "react";
import WatchStar from "../../public/images/watch-star.svg";
import VisuallyHidden from "../VisuallyHidden";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import usePathActiveHook from "../../hooks/path-active-hook";
type Props = {
  children: React.ReactNode;
};

const WebAppLayout = ({ children }: Props) => {
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
              <img src="./images/logo.svg" alt="" />
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
                  <button className="btn-watchlist">
                    <WatchStar></WatchStar> Watch List
                  </button>
                </Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Profile Settings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Accounts and Billing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Help Center
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {children}
    </>
  );
};

export default WebAppLayout;
