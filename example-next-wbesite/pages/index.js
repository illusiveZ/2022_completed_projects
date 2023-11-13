import React from "react";
import Layout from "@components/Layout";
import HeaderOne from "@components/HeaderOne";
import MobileNav from "@components/MobileNav";
import SliderOne from "@components/SliderOne";
import About from "@components/About";
import Services from "@components/Services";
import Project from "@components/Project";
import ProgressSection from "@components/ProgressSection";
import OurTeam from "@components/Team";
import ContactTop from "@components/contact-top";
import ContactForm from "@components/ContactForm";
import Price from "@components/Price";
import BlogHome from "@components/BlogHome";
import Subscribe from "@components/Subscribe";
import Footer from "@components/Footer";

function Index() {
  return (
    <Layout pageTitle="Name TBA">
      <HeaderOne />
      <MobileNav />
      <SliderOne />
      <About />
      <Services />
      <Project />
      <ProgressSection />
      <OurTeam />
      <ContactTop />
      <ContactForm />
      <Price />
      <BlogHome />
      <Subscribe />
      <Footer />
    </Layout>
  );
}

export default Index;
