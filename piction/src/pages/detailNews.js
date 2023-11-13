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
        this.props.history.push("/news");
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
                style={{ backgroundImage: "url('./img/blog/image1.jpg')" }}
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
                    <BackArrow src="./img/back.png" alt="Back to news" />
                    <span>Back </span>
                  </BackButton>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 pl-md-0">
                        <TagName className="date">June 11, 2020</TagName>
                        <Title>Lorem Ipsum</Title>
                        <ProjectSummary>
                          Cow filet mignon pork chop, leberkas drumstick shankle
                          rump pork loin t-bone hamburger jowl.
                        </ProjectSummary>
                      </div>
                    </div>
                  </div>
                </div>
              </Hero>
            </Fade>

            <section className="container" id="project-info">
              <div className="row">
                <div className="col-md-12">
                  <p className="content">
                    Burgdoggen pork chop pork belly ribeye kevin tri-tip jowl
                    chislic boudin kielbasa ham pork t-bone. Boudin chicken
                    meatloaf, sirloin flank picanha pork belly kevin turducken
                    spare ribs tail tongue pork ham.
                  </p>
                  <p className="content">
                    Burgdoggen pork chop pork belly ribeye kevin tri-tip jowl
                    chislic boudin kielbasa ham pork t-bone. Boudin chicken
                    meatloaf, sirloin flank picanha pork belly kevin turducken
                    spare ribs tail tongue pork ham.
                  </p>
                  <div className="img-blog height-blog400">
                    <img
                      src="./img/blog/image4.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <h3 className="my-5">Bacon Ipsum</h3>
                  <p className="content">
                    Burgdoggen pork chop pork belly ribeye kevin tri-tip jowl
                    chislic boudin kielbasa ham pork t-bone. Boudin chicken
                    meatloaf, sirloin flank picanha pork belly kevin turducken
                    spare ribs tail tongue pork ham.
                  </p>
                  <p className="content">
                    Burgdoggen pork chop pork belly ribeye kevin tri-tip jowl
                    chislic boudin kielbasa ham pork t-bone. Boudin chicken
                    meatloaf, sirloin flank picanha pork belly kevin turducken
                    spare ribs tail tongue pork ham.
                  </p>
                </div>
                <div className="col-md-6 p-md-0">
                  <div className="img-blog height-blog300">
                    <img
                      src="./img/blog/image5.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <div className="img-blog height-blog300">
                    <img
                      src="./img/blog/image6.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                </div>
                <div className="col-md-6 p-md-0">
                  <div className="img-blog">
                    <img
                      src="./img/blog/image7.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <h3 className="my-5">Bacon Ipsum</h3>
                  <p className="content">
                    Burgdoggen pork chop pork belly ribeye kevin tri-tip jowl
                    chislic boudin kielbasa ham pork t-bone. Boudin chicken
                    meatloaf, sirloin flank picanha pork belly kevin turducken
                    spare ribs tail tongue pork ham.
                  </p>
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
