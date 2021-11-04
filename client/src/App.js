import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CustomNavbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Row>
            <Col xs={10} className="fullPageContainer">
              {/* Sections set for ScrollSpy */}
              <section id="about"><Home /></section>
              <section id="skills"><Skills /></section>
              <section id="portfolio"><Portfolio /></section>
              <section id="contact"><Contact /></section>

              {/* Router Backup */}
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} /> */}

            </Col>
            <Col xs={2}>
              <div className="fixedRight">
                <CustomNavbar />
              </div>
            </Col>
          </Row>
        </Container>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
