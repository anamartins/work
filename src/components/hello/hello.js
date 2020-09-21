import React from "react";
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
        <input type="button" value="more about me" />
        <input type="button" value="Download my CV" />
      </div>
    );
  }
}

export default Hello;
