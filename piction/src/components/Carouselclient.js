import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slick slickclient">
        <Slider {...settings} autoplay={3000}>
          <CustomSlide className="itm" index={1}>
            <img
              src="./img/ourclients/image1-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <img
              src="./img/ourclients/image2-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <img
              src="./img/ourclients/image3-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <img
              src="./img/ourclients/image4-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={5}>
            <img
              src="./img/ourclients/image5-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={6}>
            <img
              src="./img/ourclients/image6-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={7}>
            <img
              src="./img/ourclients/image7-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={8}>
            <img
              src="./img/ourclients/image8-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={9}>
            <img
              src="./img/ourclients/image9-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={10}>
            <img
              src="./img/ourclients/image10-thumb.jpg"
              className="img-fluid"
              alt="Imageteam"
            />
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
