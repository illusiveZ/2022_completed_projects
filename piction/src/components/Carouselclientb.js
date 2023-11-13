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
        <Slider {...settings} autoplay={1000}>
          <CustomSlide className="itm" index={1}>
            <img
              src="./img/ourclients/image11-thumb.jpg"
              className="img-fluid"
              alt="Image11"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <img
              src="./img/ourclients/image12-thumb.jpg"
              className="img-fluid"
              alt="Image12"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <img
              src="./img/ourclients/image13-thumb.jpg"
              className="img-fluid"
              alt="Image13"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <img
              src="./img/ourclients/image14-thumb.jpg"
              className="img-fluid"
              alt="Image14"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={5}>
            <img
              src="./img/ourclients/image15-thumb.jpg"
              className="img-fluid"
              alt="Image15"
            />
          </CustomSlide>

          <CustomSlide className="itm" index={6}>
            <img
              src="./img/ourclients/image16-thumb.jpg"
              className="img-fluid"
              alt="Image16"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={7}>
            <img
              src="./img/ourclients/image17-thumb.jpg"
              className="img-fluid"
              alt="Image17"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={8}>
            <img
              src="./img/ourclients/image18-thumb.jpg"
              className="img-fluid"
              alt="Image18"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={9}>
            <img
              src="./img/ourclients/image19-thumb.jpg"
              className="img-fluid"
              alt="Image19"
            />
          </CustomSlide>
          <CustomSlide className="itm" index={10}>
            <img
              src="./img/ourclients/image20-thumb.jpg"
              className="img-fluid"
              alt="Image20"
            />
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
