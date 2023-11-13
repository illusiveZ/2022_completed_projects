import React, { Component, createRef, Fragment } from "react";
import {
  Hero,
  Title,
  ProjectSummary,
  TagName,
  CaseWrapper,
  BackButton,
  BackArrow,
} from "../styles/Case.styles";

import { Fade } from "react-awesome-reveal";
import { withRouter } from "react-router";
import Footer from "../components/Footer";
// import { effectr, effectr1, effectr2 } from "../styles/effect.styles";

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

class Case extends Component {
  constructor(props) {
    super(props);
    this.introRef = createRef();

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: "",
    };
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push("/work");
      }, 400);
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.setNavBackground(false);

        this.props.history.push(this.state.animateCase);
        window.scrollTo(0, 0);
      }, 400);
    }
  }

  render() {
    return (
      <Fragment>
        <effectr />
        <effectr1 />
        <effectr2 />
        <ScrollTop>
          <CaseWrapper>
            <Fade>
              <Hero
                className="mainhero"
                style={{ backgroundImage: "url('./img/projects/island2.jpg')" }}
              >
                <div className="project-title">
                  <BackButton
                    className="back-btn-settings"
                    onClick={() =>
                      this.setState({ toBack: true, hasBackground: false })
                    }
                    toBack={this.state.toBack}
                    hasBackground={this.state.hasBackground}
                  >
                    <BackArrow src="./img/back.png" alt="Back to Projects" />
                    <span>Back </span>
                  </BackButton>
                  <TagName>Wildlife</TagName>
                  <Title>Tiger Stretching</Title>
                  <ProjectSummary>
                    Burgdoggen pork chop pork belly ribeye kevin tri-tip jowl
                    chislic boudin kielbasa ham pork t-bone. Boudin chicken
                    meatloaf, sirloin flank picanha pork belly kevin turducken
                    spare ribs tail tongue pork ham.
                  </ProjectSummary>
                </div>
              </Hero>
            </Fade>

            <section className="container-fluid" id="project-info">
              <div className="row row-setting">
                <div className="col-md-8">
                  <p className="content">
                    Ground round flank pork, burgdoggen tenderloin ham brisket
                    venison biltong swine. Shankle porchetta ball tip, pork
                    strip steak beef alcatra flank pancetta kielbasa. Chicken
                    jowl shoulder, cupim pig doner buffalo ball tip.
                  </p>
                  <p className="content">
                    Shankle cow salami chicken, pastrami cupim pancetta beef
                    doner short ribs sirloin leberkas hamburger prosciutto.
                    Picanha salami leberkas meatloaf, swine tongue chislic
                    kielbasa bacon bresaola fatback pork loin pig.
                  </p>
                </div>
                <div className="col-md-4 sticky">
                  <ul className="project-info">
                    <li>
                      <span className="title">Category:</span>
                      <span>Wildlife</span>
                    </li>
                    <li>
                      <span className="title">For:</span>
                      <span>Munder Difflin</span>
                    </li>
                    <li>
                      <span className="title">Completed:</span>
                      <span>June 18th, 2011</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="tags">
                    <span className="heading">Tags :</span>
                    <span className="content">Wildlife</span>
                    <span className="content">Nature</span>
                    <span className="content">Photography</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading">Share :</span>
                    <span className="content">
                      <i className="fa fa-facebook-f"></i>
                    </span>
                    <span className="content">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <span className="content">
                      <i className="fa  fa-instagram"></i>
                    </span>
                    <span className="content">
                      <i className="fa  fa-tumblr"></i>
                    </span>
                    <span className="content">
                      <i className="fa  fa-pinterest"></i>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </CaseWrapper>
        </ScrollTop>

        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(Case);
