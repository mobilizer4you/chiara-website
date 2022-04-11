import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Modal from "../../components/Modal";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";

import WatchStar from "../../public/images/watch-star.svg";
import VisuallyHidden from "../VisuallyHidden";
import usePathActiveHook from "../../hooks/path-active-hook";
import { useAuthUser } from "next-firebase-auth";
import { clientLogout } from "../../utils/firebase";
import { useRouter } from "next/router";
import { ROUTES } from "../../utils/utils";
import Image from "next/image";
import LogoutModal from "../LogoutModal/LogoutModal";
type Props = {
  children: React.ReactNode;
};

const WebAppLayout = ({ children }: Props) => {
  const [showDialog, setShowDialog] = React.useState(false);
  const pathName = usePathActiveHook();
  const authUser = useAuthUser();
  const router = useRouter();

  const handleLogout = () => {
    clientLogout();
    router.push(ROUTES.HOME);
  };

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
                <NavDropdown.Item>
                  <Link href={ROUTES.APP.USER.ACCOUNT} passHref>
                    <a>Account Settings</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Help Center
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item as="button" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item> */}
                <NavDropdown.Item
                  as="button"
                  onClick={() => setShowDialog(true)}
                >
                  Logout
                </NavDropdown.Item>
                <Modal isDialogOpen={showDialog} setDialogOpen={setShowDialog}>
                  <LogoutModal setShowDialog={setShowDialog} />
                </Modal>
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
