import React from "react";

import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import icon from "../assets/icon.png";

import { auth } from "./Firebase";

const NavigationBar = ({ userName, setUserName }) => {
  const logoutHandler = async () => {
    auth.signOut();
    setUserName("");
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src={icon} width="50px" alt="Home" />
        <h2>Pizzeria Delizioso</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {userName ? (
            <>
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/history">
                  Historia zamówień
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/menu">
                  Menu
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} to="/" onClick={logoutHandler}>
                  Wyloguj
                </Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to="/login">
                  Zaloguj
                </Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
