import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="construction-content">
        <div className="container">
          <div className="construction-message">
            <h1>About Us</h1>
            <div className="construction-icon">🏗️</div>
            <h2>Page Under Construction</h2>
            <p>
              We're working hard to bring you an amazing experience. Please
              check back soon!
            </p>
            <div className="construction-buttons">
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
