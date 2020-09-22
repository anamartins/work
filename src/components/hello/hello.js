import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hello">
        <h1>
          Hello, my name is <span className="highlighting">Ana</span>
        </h1>
        <p className="subtitle">and I've done this website!</p>
        <Link to="/about-me">
          {" "}
          <input type="button" value="more about me" />
        </Link>
        <input type="button" value="Download my CV" />
      </div>
    );
  }
}

export default Hello;
