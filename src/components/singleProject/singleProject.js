import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={
          this.props.soon ? "single-project soon" : "single-project on"
        }
      >
        {this.props.soon ? (
          <div className="single-project-content">
            <div className="single-project-icon">
              <img
                src={`../../img/project-icons/${this.props.slug}-icon-light.png`}
              />
            </div>
            <div className="single-project-info">
              <h3 className="single-project-name-soon">{this.props.name}</h3>
              <p className="single-project-description">
                {this.props.description}
              </p>
            </div>
          </div>
        ) : (
          <Link to={`/${this.props.slug}`} className="single-project-content">
            <div className="single-project-icon">
              <img
                src={`../../img/project-icons/${this.props.slug}-icon-light.png`}
              />
            </div>
            <div className="single-project-info">
              <h3 className="single-project-name">{this.props.name}</h3>
              <p className="single-project-description">
                {this.props.description}
              </p>
            </div>
          </Link>
        )}
      </div>
    );
  }
}

export default SingleProject;
