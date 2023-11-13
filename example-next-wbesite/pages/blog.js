import React from "react";
import Layout from "@components/Layout";
import HeaderTwo from "@components/HeaderTwo";
import BlogPage from "@components/BlogPage";
import PageHeader from "@components/PageHeader";
import Brand from "@components/Brand";
import Footer from "@components/Footer";
import MobileNav from "@components/MobileNav";

function Blog() {
  return (
    <Layout pageTitle="Blog Page || Besit React || Corporate One page React Template">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Blog Page`} />
      <BlogPage />
      <Brand />
      <Footer />
    </Layout>
  );
}

export default Blog;
