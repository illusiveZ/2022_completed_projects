import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import { LinkWrap, Overlay } from "../styles/Work.styles";

import Footer from "../components/Footer";

// import { effect, effect1, effect2 } from "../styles/effect.styles";

const News = ({ history }) => {
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
              <h1 className="heading mt-5">Our latest blogs </h1>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="container-fluid">
          <div className="row row-setting">
            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/blog/image1.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> June 11, 2019</div>
                          <div className="name">Capicola fatback salami</div>
                          <div className="content">
                            Ham burgdoggen kielbasa, biltong sirloin pork loin
                            tongue ribeye salami beef. Tail tri-tip t-bone,
                            shank pork belly venison bresaola tenderloin.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/blog/image2.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> June 11, 2019</div>
                          <div className="name">Capicola fatback salami</div>
                          <div className="content">
                            Ham burgdoggen kielbasa, biltong sirloin pork loin
                            tongue ribeye salami beef. Tail tri-tip t-bone,
                            shank pork belly venison bresaola tenderloin.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/blog/image3.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> June 11, 2019</div>
                          <div className="name">Capicola fatback salami</div>
                          <div className="content">
                            Ham burgdoggen kielbasa, biltong sirloin pork loin
                            tongue ribeye salami beef. Tail tri-tip t-bone,
                            shank pork belly venison bresaola tenderloin.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/blog/image4.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> June 11, 2019</div>
                          <div className="name">Capicola fatback salami</div>
                          <div className="content">
                            Ham burgdoggen kielbasa, biltong sirloin pork loin
                            tongue ribeye salami beef. Tail tri-tip t-bone,
                            shank pork belly venison bresaola tenderloin.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/blog/image5.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> June 11, 2019</div>
                          <div className="name">Capicola fatback salami</div>
                          <div className="content">
                            Ham burgdoggen kielbasa, biltong sirloin pork loin
                            tongue ribeye salami beef. Tail tri-tip t-bone,
                            shank pork belly venison bresaola tenderloin.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/blog/image6.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> June 11, 2019</div>
                          <div className="name">Capicola fatback salami</div>
                          <div className="content">
                            Ham burgdoggen kielbasa, biltong sirloin pork loin
                            tongue ribeye salami beef. Tail tri-tip t-bone,
                            shank pork belly venison bresaola tenderloin.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
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

export default withRouter(News);
