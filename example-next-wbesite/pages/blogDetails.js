import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/HeaderTwo";
import MobileNav from "@components/MobileNav";
import PageHeader from "@components/PageHeader";
import BlogContent from "@components/BlogContent";
import Brand from "@components/brand";
import Footer from "@components/footer";

function blogDetails() {
  return (
    <Layout pageTitle="name TBA">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={"Blog Details"} />
      <BlogContent />
      <Brand />
      <Footer />
    </Layout>
  );
}

export default blogDetails;
