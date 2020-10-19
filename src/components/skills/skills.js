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
            <h3>
              <span className="highlighting">I'm studying</span>
            </h3>
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
            <h3>
              <span className="highlighting">Tools</span>
            </h3>
            <ul className="tools-list">
              <li>Axure</li>
              <li>Figma</li>
              <li>Google Analytics</li>
            </ul>
          </div>

          <div className="heart">
            <h3>
              <span className="highlighting">Other Things I Know</span>
            </h3>
            <ul className="heart-list">
              <li>Prototyping</li>
              <li>Moderating Usability Tests</li>
              <li>Heuristics</li>
              <li>Design Sprint</li>
              <li>Personas</li>
            </ul>
          </div>

          <div className="languages">
            <h3>
              <span className="highlighting">Languages</span>
            </h3>
            <ul className="languages-list">
              <li>Portuguese: mother tongue</li>
              <li>English: Fluent</li>
              <li>Dutch: Beginner</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
