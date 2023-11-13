import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "@images/logo-light.png";
import footerGallery1 from "@images/resources/footer-g-1-1.jpg";
import footerGallery2 from "@images/resources/footer-g-1-2.jpg";
import footerGallery3 from "@images/resources/footer-g-1-3.jpg";
import footerGallery4 from "@images/resources/footer-g-1-4.jpg";
import footerGallery5 from "@images/resources/footer-g-1-5.jpg";
import footerGallery6 from "@images/resources/footer-g-1-6.jpg";
function Footer() {
  return (
    <footer className="main-footer">
      <div className="upper-footer">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={4}>
              <div className="footer-widget footer-widget__about">
                <a href="/">
                  <img src={logoLight} alt="" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad mini veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo conse
                </p>
                <a href="/">
                  Read More <i className="far fa-angle-double-right"></i>
                </a>
                <hr />
                <div className="footer-widget__social">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-skype"></a>
                  <a href="#" className="fab fa-linkedin-in"></a>
                </div>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={2}>
              <div className="footer-widget footer-widget__links-widget">
                <h3 className="footer-widget__title">Useful Links</h3>

                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Project</a>
                  </li>
                  <li>
                    <a href="#">Our News</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={3}>
              <div className="footer-widget footer-widget__contact">
                <h3 className="footer-widget__title">Contact Us</h3>

                <p>2450 Nostrand avenue, New</p>
                <ul className="footer-widget__contact-list list-unstyled">
                  <li>
                    <a href="mailto:your.info@gmail.com">
                      <i className="themify-icon-email"></i>
                      your.info@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+023-6549-8756">
                      <i className="themify-icon-headphone-alt"></i> + 023-6549
                      8756
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="themify-icon-link"></i> www.example.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={12} md={6} lg={6} xl={3}>
              <div className="footer-widget">
                <h3 className="footer-widget__title">Instagrame Follow</h3>

                <ul className="list-unstyled footer-widget__gallery">
                  <li>
                    <a href="#">
                      <img src={footerGallery1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery2} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery3} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery4} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery5} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={footerGallery6} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bottom-footer">
        <Container>
          <div className="inner-container">
            <p>Copyright {new Date().getFullYear()} All Right Reserved</p>
            <ul className="list-unstyled footer-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
