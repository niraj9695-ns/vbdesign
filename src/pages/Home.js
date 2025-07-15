import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
