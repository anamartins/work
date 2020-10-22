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
        <h3 className="single-project-name">{this.props.name}</h3>
        <p className="single-project-description">{this.props.description}</p>
        <div className="image">
          <Link to={`/${this.props.slug}`}>
            <img
              className="printscreen"
              src={`../../img/${this.props.slug}.png`}
            />
            <input type="button" value="Go!" className="single-project-btn" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleProject;
