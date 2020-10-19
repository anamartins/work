import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="project">
        <h3>{this.props.name}</h3>
        <div className="image">
          <a href={this.props.url} target="_blank">
            <img className="printscreen" src={`./img/${this.props.slug}.png`} />
            <input type="button" value="Go!" className="project-btn" />
          </a>
        </div>
      </div>
    );
  }
}

export default SingleProject;
