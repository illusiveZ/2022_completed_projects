import React from "react";
import ServiceCard from "@components/ServiceCard";
import { SERVICE_DATA } from "@data/index";

function Services() {
  return (
    <section className="service-one" id="services">
      <div className="container">
        <div className="block-title text-center">
          <p>
            <span></span>Why Choose Us
          </p>
          <h3>
            Start Your Business with brainstorming <br />{" "}
            <span>Product Anything.</span>
          </h3>
        </div>
        <div className="service-one__3-col">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard data={service} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
