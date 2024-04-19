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
      <HomepageHero data={["test", "test -2 ", 3]} />
      <HomepageMenu data={["test", "test -2 ", 3]} />
      <HomepageAmbience data={["test", "test -2 ", 3]} />
      <HomepageEvents data={["test", "test -2 ", 3]} items={[1, 2, 3]} />
      <HomepageTestimonials data={["test", "test -2 ", 3]} items={[1, 2, 3]} />
    </PageWrapper>
  );
};

export default HomePage;
