import React from "react";
import SingleProject from "../singleProject/singleProject";

import "./style.scss";
import { projectsContent } from "../../content/projectContent.js";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.showProjects = this.showProjects.bind(this);
  }

  showProjects() {
    return projectsContent.map((project, index) => (
      <SingleProject
        key={index}
        name={project.name}
        description={project.description}
        url={project.url}
        slug={project.slug}
      />
    ));
  }

  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <div className="all-projects">{this.showProjects()}</div>
      </div>
    );
  }
}

export default Projects;
