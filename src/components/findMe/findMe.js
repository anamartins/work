import React from "react";
import "./style.scss";

class FindMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="find-me">
        <h2 className="find-me-title">Find Me:</h2>
        <div className="social-media">
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
}

export default FindMe;
