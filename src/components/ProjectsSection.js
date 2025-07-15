import React, { useState, useEffect } from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [currentSlides, setCurrentSlides] = useState([0, 0, 0]);

  const projects = [
    {
      id: 1,
      title: "Poolscape Villa",
      year: "2010",
      description:
        "The Seascape Villas project constitutes one of the first urban interventions in this very unique context, a landscape dominated by mountains and sea.",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
    },
    {
      id: 2,
      title: "European Lard Station",
      year: "2009",
      description:
        "A contemporary architectural masterpiece that seamlessly blends modern design with traditional European aesthetics, creating a harmonious living space.",
      images: [
        "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
    },
    {
      id: 3,
      title: "Urban Sanctuary",
      year: "2011",
      description:
        "An innovative residential complex that redefines urban living through thoughtful design, sustainable materials, and integration with the natural environment.",
      images: [
        "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
    },
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides((prev) =>
        prev.map((slide, index) => (slide + 1) % projects[index].images.length)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [projects]);

  return (
    <section className="projects-section">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-row ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            <div className="project-image-container">
              <div className="project-carousel">
                {project.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`project-slide ${
                      imgIndex === currentSlides[index] ? "active" : ""
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
              </div>
            </div>

            <div className="project-content">
              <div className="project-year">{project.year}</div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <button className="read-more-btn">
                READ
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
