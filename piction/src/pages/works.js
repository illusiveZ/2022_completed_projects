import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import { LinkWrap, Overlay } from "../styles/Work.styles";

import Footer from "../components/Footer";

// import { effect, effect1, effect2 } from "../styles/effect.styles";

const Works = ({ history }) => {
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <div>
      <effect />
      <effect1 />
      <effect2 />

      <div className="jumbotron head" />

      <Fade>
        <section className="container-fluid pb-0">
          <div className="row row-setting">
            <div className="col-md-12">
              <h1 className="heading mt-5">Our most recent works</h1>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid">
          <div className="row row-setting">
            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/whale.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Wildlife</div>
                          <div className="name">Waving Whale</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase1"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase1")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/tiger.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Wildlife</div>
                          <div className="name">Tiger Stretching</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase2"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase2")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/island.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Nature</div>
                          <div className="name">Reflective Island</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase3"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase3")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/island2.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Landscape</div>
                          <div className="name">Swinging Chair</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/germanShepherd.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Fine Art</div>
                          <div className="name">German Shepherd</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slickproject p-3">
              <div className="slick-slide d-block">
                <div>
                  <div className="itm">
                    <LinkWrap active={toCase === "/detailcase1"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailcase1")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/projects/silverback.jpg"
                            className="img-fluid"
                            alt="Imageworks"
                          />
                        </div>
                        <div className="desc">
                          <div className="tag">Fine Art</div>
                          <div className="name">Gorillas Kissing</div>
                        </div>
                        <div className="icon">
                          <span>View Project</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <div className="page-number">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                </li>
                <li className="page-item">
                  <div className="page-number active">1</div>
                </li>
                <li className="page-item">
                  <div className="page-number">2</div>
                </li>
                <li className="page-item">
                  <div className="page-number">3</div>
                </li>
                <li className="page-item">
                  <div className="page-number">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Fade>

      <Footer />
    </div>
  );
};

export default withRouter(Works);
