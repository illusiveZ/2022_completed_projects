import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/HeaderTwo";
import MobileNav from "@components/MobileNav";
import SliderTwo from "@components/SliderTwo";
import About from "@components/about";
import Services from "@components/Services";
import Project from "@components/Project";

import ProgressSection from "@components/ProgressSection";
import Team from "@components/Team";
import ContactTop from "@components/contact-top";
import ContactForm from "@components/ContactForm";
import Price from "@components/price";
import BlogHome from "@components/BlogHome";
import Subscribe from "@components/Subscribe";
import Footer from "@components/footer";

const IndexTwo = () => {
  return (
    <Layout>
      <HeaderTwo />
      <MobileNav />
      <SliderTwo />
      <About />
      <Services />
      <Project />
      <ProgressSection />
      <Team />
      <ContactTop />
      <ContactForm />
      <Price />
      <BlogHome />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexTwo;
