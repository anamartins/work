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
        <h1 className="about-me-title">Hello, my name is Ana.</h1>

        <div className="wrapper">
          <div className="about-me-left">
            <div className="about-me-text">
              <p className="about-me-paragraph">
                I'm Brazilian and I'm 35. I was that kind of kid from the 90s
                who was always at the computer. Probably that's the reason I've
                chosen Computer Science as my college degree. Right after I
                finished it, I started working as a Usability Analyst and I've
                chosen my path in UX. Throughout all these years,{" "}
                <a
                  className="about-me-link"
                  href="https://www.linkedin.com/in/anacmartins/"
                  target=" _blank"
                >
                  I've worked in different roles
                </a>
                : UX Analyst, SEO Analyst, Product Manager and so on. And I've
                never thought about programming again.
              </p>

              <p className="about-me-paragraph">
                But now here I am, studying Javascript and its friends (mostly
                React and Redux). Sometimes I cannot believe it. I know I'm
                quite new at this, but I've already had a whole career on
                Internet companies and I considered myself a fast learner. And I
                say this as a person who isn't comfortable with self-praising.
              </p>
              <p className="about-me-paragraph">
                When I'm not working or studying, I like knitting. I've learned
                how to knit when I was a teenager and I love the fact we can
                build something wearable from scratch. Lately, I am also
                enjoying playing Animal Crossing. My favorite villager is{" "}
                <a
                  className="about-me-link"
                  href="https://www.bluebirdhastoldme.com/villager/benedict"
                  target="_blank"
                >
                  Benedict
                </a>
                . I like how easy going he is.{" "}
              </p>

              <p className="about-me-paragraph">
                I am really enjoying coding and building things. I am totally
                obsessed about the possibilities code gives to me. I may sound
                silly, but I think it's kinda magic. It's like knit a jumper: in
                a moment we have nothing, and after some calculation we have
                something wearable, usable, useful. I'd like to become a
                professional frontend developer. I've been making{" "}
                <a
                  className="about-me-link"
                  href="https://github.com/anamartins"
                  target="_blank"
                >
                  some projects for fun
                </a>{" "}
                and I'd like to work in a good team learning new things every
                day.
              </p>
            </div>
          </div>
          <div className="about-me-right">
            <div className="about-me-photos">
              <img src="../../img/photos/ana.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
