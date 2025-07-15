import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="about-subtitle">A CREATIVE VISION</span>
            <h2 className="about-title">
              Fully integrated architecture and interior design studio committed
              to crafting spaces of distinction and timeless appeal. VB Design
              brings together architectural innovation and interior elegance.
            </h2>
            <p className="about-description">
              We approach every project as a creative journey—where spatial
              planning, natural light, textures, and materials converge into a
              unified expression of purpose and beauty. Believing that
              exceptional design lies in the details, we focus on creating
              environments that not only function seamlessly but also enrich the
              human experience on every level.
            </p>
            <Link to="/about" className="btn btn-outline">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
