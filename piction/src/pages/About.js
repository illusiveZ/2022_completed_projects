import React from "react";
import { withRouter } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import Abouthome from "../components/Abouthome";
import Footer from "../components/Footer";

// import { effect, effect1, effect2 } from "../styles/effect.styles";

const About = ({ history }) => {
  return (
    <div>
      <effect />
      <effect1 />
      <effect2 />

      <div className="jumbotron head" />

      <Fade>
        <section className="jumbotron img-top">
          <img src="./img/aboutUsMain.jpg" className="img-fluid" alt="#" />
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid pb-0">
          <div className="row row-setting">
            <div className="col-md-4">
              <h1>About Us</h1>
            </div>
            <div className="col-md-8">
              <div className="content">
                Strip steak hamburger pork, shankle t-bone beef ribs tri-tip.
                Rump pastrami filet mignon porchetta, bacon beef prosciutto.
                Doner tenderloin chuck, picanha beef bresaola short ribs chislic
                corned beef ribeye pig cupim. Chislic venison ground round pork
                loin capicola corned beef pork chop, pastrami short ribs.
                Kielbasa ball tip shankle, strip steak chicken swine flank
                shoulder porchetta meatloaf biltong t-bone tenderloin
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <Abouthome />
      </Fade>

      <Footer />
    </div>
  );
};

export default withRouter(About);
