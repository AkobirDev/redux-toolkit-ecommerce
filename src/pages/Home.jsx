import React from "react";

import Helmet from "../components/Helmet/Helmet";

import Category from "../components/UI/category/Category";
import "../styles/home.css";
import Testimonials from "../components/Testimonials/Testimonials";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import MainFood from "../components/MainFood/MainFood";

const Home = () => {
  return (
    <Helmet title="Home">
      <Hero />
      <Category />
      <Features />
      <MainFood />
      <Testimonials />
    </Helmet>
  );
};

export default Home;
