import React from "react";
import SingleProject from "../singleProject/singleProject";

import "./style.scss";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <SingleProject
          name="Blue Bird Has Told Me"
          description="Animal Crossing"
          url="https://www.bluebirdhastoldme.com/"
          slug="blue-bird-has-told-me"
        />
      </div>
    );
  }
}

export default Projects;
