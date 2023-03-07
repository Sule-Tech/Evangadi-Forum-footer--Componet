import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./image/evangadi-logo-footer.png";
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#3b455a",
          padding: "60px 0 40px 0",
          color: "rgba(213,213,213,0.6)",
          lineHeight: "1.4em",
          fontSize: "14px",
        }}>
        <Container>
          <Row>
            <Col sm={12} md={4} className="my-3">
              <Row>
                <Col sm={12}>
                  <img src={logo} alt="footer-logo" />
                </Col>
                <Row
                  style={{
                    width: "45%",
                    margin: "30px 0",
                    fontSize: "25px",
                  }}>
                  <Col xs={4}>
                    <a
                      href="https://www.facebook.com/EthiopiansNetwork"
                      target="_blank">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </Col>
                  <Col xs={4}>
                    <a
                      href="https://www.instagram.com/evangaditech/"
                      target="_blank">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </Col>
                  <Col xs={4}>
                    <a
                      href="https://www.youtube.com/c/weareethiopians"
                      target="_blank">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </Col>
                </Row>
              </Row>
            </Col>

            <Col sm={12} md={4} className="my-3">
              <h5 className="text-white">Useful Link</h5>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-25px",
                  lineHeight: "30px",
                }}>
                <li>
                  <a href="https://www.evangadi.com/explained/">How it Works</a>
                </li>
                <li>
                  <a href="https://www.evangadi.com/legal/terms/">
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a href="https://www.evangadi.com/legal/privacy/">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </Col>

            <Col sm={12} md={4} className="my-3">
              <h5 className="text-white">Contact INfo</h5>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-25px",
                  lineHeight: "30px",
                }}>
                <li>
                  <a href="">Evangadi Networks</a>
                </li>
                <li>
                  <a href="">support@evangadi.coms</a>
                </li>
                <li>
                  <a href="">+1-202-386-2702</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
