import React from "react";

export default () => (
  <footer className="container-fluid black_more">
    <div className="bg-footer">
      <img src="./img/footer-img.png" alt="bg-footer" />
    </div>
    <div className="row row-setting">
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading">
            <h2>About Us</h2>
          </div>
          <div className="content">
            <p>
              Pork loin venison beef hamburger pork chop salami andouille doner
              ball tip chislic drumstick turducken meatloaf.
            </p>
          </div>
          <div
            className="link-call"
            onClick={() => window.open("mailto:support@Homekins.com", "_self")}
          >
            contactus@gmail.com
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
          <div className="heading">Our Services</div>
          <div className="content">
            <div className="link">Lorem Ipsum</div>
            <div className="link">Bacon Ipsum</div>
            <div className="link">Lorem Ipsum</div>
            <div className="link">Bacon Ipsum</div>
            <div className="link">Lorem Ipsum</div>
            <div className="link">Bacon Ipsum</div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-col">
          <div className="heading">Customer Services</div>
          <div className="content">
            <div className="link">Lorem Ipsum</div>
            <div className="link">Bacon Ipsum</div>
            <div className="link">Lorem Ipsum</div>
            <div className="link">Bacon Ipsum</div>
            <div className="link">Lorem Ipsum</div>
            <div className="link">Bacon Ipsum</div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading">Our Socials</div>
          <div className="content">
            <p>
              Biltong venison frankfurter bresaola, meatloaf spare ribs beef
              ribs beef pork pancetta pig
            </p>
            <div className="socialicon">
              <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className="socialicon">
              <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className="socialicon">
              <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className="socialicon">
              <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
            <div className="socialicon">
              <span className="shine"></span>
              <i className="fa fa-tumblr"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="subfooter">
      <div className="row row-setting">
        <div className="col-md-6">
          <div className="content">&copy; Copyright 2021 Piction</div>
        </div>
      </div>
    </div>
  </footer>
);
