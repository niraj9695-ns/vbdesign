import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import officeImg from "../images/homeimages/hvb1.jpg";
import architectureImg from "../images/homeimages/hvb2.jpg";
import luxuryImg from "../images/homeimages/hvb3.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: officeImg,
      alt: "Modern office interior",
    },
    {
      image: architectureImg,
      alt: "Contemporary architecture",
    },
    {
      image: luxuryImg,
      alt: "Luxury interior design",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <span className="hero-subtitle">ARTISANAL VALUE CREATION</span>
            <h1 className="hero-title">
              Extraordinary
              <br />
              Architecture and
              <br />
              Interior Designs
            </h1>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-secondary">
                About
              </Link>
              <Link to="/projects" className="btn btn-primary">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
