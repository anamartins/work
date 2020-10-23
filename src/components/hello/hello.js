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
        <div className="content">
          <h1 className="hello-title">
            Hello, my name is <span className="highlighting">Ana</span>,
          </h1>

          <p className="subtitle">
            a Brazilian frontend dev wannabe based in Amsterdam
          </p>
          <p className="subtitle">
            and <span className="highlighting">I'm looking for a job</span>.
          </p>
          <Link to="/about-me">
            {" "}
            <input type="button" value="more about me" className="hello-btn" />
          </Link>

          <a href="https://www.linkedin.com/in/anacmartins/" target="_blank">
            <input type="button" value="look my CV" className="hello-btn" />
          </a>
        </div>
      </div>
    );
  }
}

export default Hello;
