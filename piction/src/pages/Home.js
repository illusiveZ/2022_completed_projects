import React from "react";
import { withRouter } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Slider from "../components/Sliderhome";
import Abouthome from "../components/Abouthome";
import Carouselfeature from "../components/Carouselfeature";
import Carouselclient from "../components/Carouselclient";
import Carouselclientb from "../components/Carouselclientb";
import FeaturedWorks from "../components/FeaturedWorks";
import Carouselteam from "../components/Carouselteam";
import Accomplish from "../components/Accomplish";
import Carouselnews from "../components/Carouselnews";
import Footer from "../components/Footer";
// import { effect, effect1, effect2 } from "../styles/effect.styles";

const Home = ({ history }) => {
  return (
    <div>
      {/* <effect />
      <effect1 />
      <effect2 /> */}

      <Fade>
        <section className="jumbotron jumbomain">
          <Slider />
        </section>
      </Fade>

      <Fade>
        <Abouthome />
      </Fade>

      <Fade>
        <section className="container-fluid">
          <div className="row row-setting">
            <div className="col-12">
              <div className="heading">Where We Excel</div>
            </div>
            <div className="col-12">
              <Carouselfeature />
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid bg-grey py-0">
          <div className="row row-setting">
            <div className="col-12">
              <Carouselclient />
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid bg-grey">
          <div className="row row-setting">
            <div className="col-12">
              <Carouselclientb />
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid pb-0">
          <div className="row row-setting">
            <div className="col-12">
              <div className="heading">Featured Projects</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <FeaturedWorks />
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid">
          <div className="row row-setting">
            <div className="col-12">
              <div className="heading">Meet Our Team</div>
            </div>
            <div className="col-12">
              <Carouselteam />
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid">
          <div className="row row-setting">
            <div className="col-12">
              <div className="heading">Our Plans</div>
            </div>
            <div className="col-12">
              <Accomplish />
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid pt-0">
          <div className="row row-setting">
            <div className="col-12">
              <div className="heading">Latest News</div>
            </div>
            <div className="col-12">
              <Carouselnews />
            </div>
          </div>
        </section>
      </Fade>

      <Footer />
    </div>
  );
};

export default withRouter(Home);
