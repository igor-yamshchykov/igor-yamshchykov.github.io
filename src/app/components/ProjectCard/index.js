import React from "react";

const ProjectCard = ({
  title,
  description,
  duration,
  techStack,
  responsibilities
}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <dl>
        <dt>Description:</dt>
        <dd>{description}</dd>
        <dt>Duration:</dt>
        <dd>{duration}</dd>
        <dt>Technology Stack:</dt>
        <dd>{techStack}</dd>
        <dt>Responsibilities:</dt>
        <dd>{responsibilities}</dd>
      </dl>
    </div>
  </div>
);

export default ProjectCard;
