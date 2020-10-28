import React from "react";
import Hello from "../../components/hello/hello";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import FindMe from "../../components/findMe/findMe";
import Astronaut from "../../components/astronaut/astronaut";

import "./style.scss";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Hello />
        <Astronaut />

        <Projects />
        <Skills />
        <FindMe />
      </div>
    );
  }
}

export default HomeView;
