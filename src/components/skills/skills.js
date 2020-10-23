import React from "react";
import "./style.scss";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        <div className="content">
          <div className="knowledge">
            <h3 className="skill-title">Development</h3>
            <ul className="knowledge-list">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Redux</li>
              <li>GSap</li>
            </ul>
          </div>
          <div className="tools">
            <h3 className="skill-title">Tools</h3>
            <ul className="tools-list">
              <li>Axure</li>
              <li>Figma</li>
              <li>Google Analytics</li>
            </ul>
          </div>

          <div className="heart">
            <h3 className="skill-title">Other Things</h3>
            <ul className="heart-list">
              <li>Prototyping</li>
              <li>Usability Test Moderation</li>
              <li>Design Sprint</li>
              <li>Personas</li>
              <li>SEO</li>
              <li>Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
