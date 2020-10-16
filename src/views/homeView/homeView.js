import React from "react";
import Hello from "../../components/hello/hello";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import BlogPosts from "../../components/blogPosts/blogPosts";
import FindMe from "../../components/findMe/findMe";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Hello />
        <Skills />
        <Projects />
        <FindMe />
      </div>
    );
  }
}

export default HomeView;
