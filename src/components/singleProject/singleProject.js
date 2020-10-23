import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="single-project">
        <Link to={`/${this.props.slug}`} className="single-project-content">
          <div className="single-project-icon">
            <img src="../../img/github-icon.png" />
          </div>
          <div className="single-project-info">
            <h3 className="single-project-name">{this.props.name}</h3>
            <p className="single-project-description">
              {this.props.description}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default SingleProject;
