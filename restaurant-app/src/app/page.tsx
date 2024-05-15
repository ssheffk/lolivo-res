import React from "react";
import HomepageHero from "./components/Hero";
import HomepageMenu from "./components/Menu";
import HomepageAmbience from "./components/Ambience";
import HomepageEvents from "./components/Events";
import HomepageTestimonials from "./components/Testimonials";
import { PageWrapper } from "./PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <HomepageHero />
      <HomepageMenu />
      <HomepageAmbience />
      <HomepageEvents />
      <HomepageTestimonials />
    </PageWrapper>
  );
};

export default HomePage;
