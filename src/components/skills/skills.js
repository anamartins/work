import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        <p>[Heart]</p>
        <ul>
          <li>Prototyping</li>
          <li>Moderating Usability Tests</li>
          <li>Heuristics</li>
          <li>Design Sprint</li>
          <li>Personas</li>
        </ul>

        <p>[tool]</p>
        <ul>
          <li>Axure</li>
          <li>Figma</li>
          <li>Google Analytics</li>
        </ul>

        <p>[books]</p>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Redux</li>
        </ul>

        <p>[globe]</p>
        <ul>
          <li>Portuguese: mother tongue</li>
          <li>English: Fluent</li>
          <li>Dutch: Beginner</li>
        </ul>
      </div>
    );
  }
}

export default Skills;
