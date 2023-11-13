import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import NavLinks from "@components/NavLinks";
import logoDark from "@images/logo-dark.png";
function HeaderOne() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setSticky(true);
    } else if (window.scrollY < 120) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <div className="topbar" id="home">
        <Container>
          <p>
            <i className="far fa-clock"></i> Mon - Fri: 9:00 am - 06.00pm /
            Closed on Weekends
          </p>

          <div className="topbar-social">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin-in"></a>
          </div>
        </Container>
      </div>
      <header className="upper-header">
        <Container>
          <div className="logo">
            <a href="/">
              <img src={logoDark} alt="" />
            </a>
            <span className="side-menu-toggler mobile-nav__opener">
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="header-infos">
            <div className="header-info">
              <i className="besit-icon-phone"></i>
              <h3>
                Call Us: <a href="tel:210-123-451">(210) 123-451</a>
              </h3>
              <p>(Sat - Thursday)</p>
            </div>
            <div className="header-info">
              <i className="far fa-map-marker-alt"></i>
              <h3>380 St Kilda Road,</h3>
              <p>Melbourne, Australia</p>
            </div>
          </div>
        </Container>
      </header>

      <nav className="main-menu stricky">
        <Container>
          <NavLinks />
          <ScrollLink
            activeClass="current"
            className="thm-btn"
            role="button"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Free Consultant <i className="fa fa-arrow-circle-right"></i>
          </ScrollLink>
        </Container>
      </nav>
      {/* stricky menu cloned */}

      <nav
        className={`main-menu stricky stricked-menu ${
          sticky === true ? "stricky-fixed" : null
        }  `}
      >
        <Container>
          <NavLinks />
          <ScrollLink
            activeClass="current"
            className="thm-btn"
            role="button"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Free Consultant <i className="fa fa-arrow-circle-right"></i>
          </ScrollLink>
        </Container>
      </nav>
    </>
  );
}

export default HeaderOne;
