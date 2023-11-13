import React from "react";
import { withRouter } from "react-router-dom";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";

import SimpleMap from "../components/Map";
import Footer from "../components/Footer";

// import { effect, effect1, effect2 } from "../styles/effect.styles";

const Contact = ({ history }) => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("send-button");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_csfdEZiA",
        e.target,
        "user_zu7p2b3lDibMCDutH5hif"
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
          button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log(error.text);
          failed.classList.add("show");
        }
      );
  }

  return (
    <div>
      <effect />
      <effect1 />
      <effect2 />

      <div className="jumbotron head" />

      <Fade>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Get in touch with us to design <br />
                your <span className="color">dream</span> home
              </h1>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container pt-0">
          <div className="row">
            <div className="col-12">
              <SimpleMap />
            </div>
            <div className="col-md-6">
              <div className="contact-text">
                <h3 className="heading">Talk with our expert designers </h3>
                <p>
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. <br />
                  Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                  urna.
                </p>
                <div className="address">
                  <div className="heading">Our Office</div>
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    1725 Slough Avenue
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope-o"></i>
                    <a
                      href="mailto:contact_info@homekins.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contactus@gmail.com
                    </a>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    0123456789
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="contact-us">
                <form className="contact-form" onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                  <label>Message</label>
                  <textarea name="message" required />
                  <div id="success" className="hide">
                    Your message has been sent...
                  </div>
                  <div id="failed" className="hide">
                    Message failed...
                  </div>
                  <button type="submit" id="send-button">
                    <span className="shine"></span>
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Footer />
    </div>
  );
};

export default withRouter(Contact);
