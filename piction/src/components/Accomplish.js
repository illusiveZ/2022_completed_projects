import React from "react";

export default () => (
  <section className="container-fluid pt-0">
    <div className="grid">
      <div className="services standard">
        <div className="title">
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
          <h2>Standard</h2>
        </div>
        <div className="price">
          <h4>
            <sup>£</sup>10
          </h4>
        </div>
        <div className="option">
          <ul>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Lorem Ipsum
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Bacon Ipsum
            </li>
            <li>
              <i className="fa fa-times" aria-hidden="true"></i> Lorem Ipsum
            </li>
            <li>
              <i className="fa fa-times" aria-hidden="true"></i> Bacon Ipsum
            </li>
          </ul>
        </div>
        <a className="btn btn-light btn-block" href="https://google.co.uk">
          Order Now
        </a>
      </div>
      <div className="services premium">
        <div className="title">
          <i className="fa fa-plane" aria-hidden="true"></i>
          <h2>Premium</h2>
        </div>
        <div className="price">
          <h4>
            <sup>£</sup>25
          </h4>
        </div>
        <div className="option">
          <ul>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Lorem Ipsum
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Bacon Ipsum
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Lorem Ipsum
            </li>
            <li>
              <i className="fa fa-times" aria-hidden="true"></i> Bacon Ipsum
            </li>
          </ul>
        </div>
        <a className="btn btn-light btn-block" href="https://google.co.uk">
          Order Now
        </a>
      </div>
      <div className="services enterprise">
        <div className="title">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <h2>Enterprise</h2>
        </div>
        <div className="price">
          <h4>
            <sup>£</sup>50
          </h4>
        </div>
        <div className="option">
          <ul>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Lorem Ipsum
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Bacon Ipsum
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Lorem Ipsum
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Bacon Ipsum
            </li>
          </ul>
        </div>
        <a
          className="btn btn-light btn-block"
          href="https://codepen.io/collection/XdWJOQ/"
        >
          Order Now
        </a>
      </div>
    </div>
  </section>
);
