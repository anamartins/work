import React from "react";
import Hello from "../../components/hello/hello";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import FindMe from "../../components/findMe/findMe";

import Sky from "../../components/sky/sky";

import "./style.scss";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        {/* <Sky constellation={300} /> */}

        <Hello />
        <Skills />
        <Projects />
        <FindMe />
      </div>
    );
  }
}

export default HomeView;
