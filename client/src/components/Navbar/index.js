import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollspy from "react-scrollspy";

function CustomNavbar(props) {
  return (
    <div className="alwaysTop">
      <h1 className="navName">AM</h1>
      <Navbar className="justify-content-center" variant="dark">
        <Nav defaultActiveKey={window.location.pathname}>
          {/* Scroll Spy Links*/}
          <Scrollspy
            items={["about", "skills", "portfolio","contact"]}
            currentClassName="active"
            className="scrollSpy"
          >
            <Nav.Item className="verticalText nav-itemSmall">
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText nav-itemSmall">
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item className="verticalText">
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Scrollspy>
        </Nav>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
