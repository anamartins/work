import React from "react";
import Sky from "../../components/sky/sky";
import { Link } from "react-router-dom";

import "./style.scss";

export default function Header() {
  return (
    <div className="header">
      <Sky constellation={80} height={55} />

      <div className="go-back">
        ←<Link to="/"> go back</Link>
      </div>
      <div className="socialmedia-links">
        <div className="social-item">
          <a href="https://github.com/anamartins" target="_blank">
            <img src="../../img/github-icon.png" />
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.linkedin.com/in/anacmartins" target="_blank">
            <img src="../../img/linkedin-icon.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
