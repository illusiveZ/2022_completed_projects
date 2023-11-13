import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";

const content = [
  {
    title: "Piction Photography",
    description: "Lorem Ipsum",
    button: "Read More",
    link: "/#",
    image: "./img/nature1.jpg",
  },
  {
    title: "Piction Photography",
    description: "Lorem Ipsum",
    button: "Read More",
    link: "/#",
    image: "./img/nature2.jpg",
  },
  {
    title: "Piction Photography",
    description: "Lorem Ipsum",
    button: "Read More",
    link: "/#",
    image: "./img/nature3.jpg",
  },
];

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
    {content.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button onClick={() => window.open(item.link, "_self")}>
            <span className="shine"></span>
            <span>{item.button}</span>
          </button>
        </div>
      </div>
    ))}
  </Slider>
);
