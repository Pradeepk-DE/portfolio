import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    link: "#"
  },
  {
    title: "Weather App",
    description: "A simple weather application built using React and OpenWeatherMap API.",
    link: "#"
  }
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map(project => (
        <div className="project-card" key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;