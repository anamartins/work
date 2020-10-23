import React from "react";
import Header from "../../components/header/header";

import "./style.scss";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-me">
        <Header />
        <h1 className="about-me-title">Hey.</h1>
        <p>I'm glad you're here! </p>
      </div>
    );
  }
}

export default AboutMe;
