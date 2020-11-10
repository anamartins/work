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
        <div class="about-me-text">
          <p class="about-me-paragraph">
            I'm Brazilian and I'm 35. I was that kind of kid from the 90s who
            were always at the computer. Probably that's the reason I've chosen
            Computer Science as my college degree. Right after I finished it, I
            started working as Usability Analyst and I've chosen my path in UX.
            Throughout all these years,{" "}
            <a
              className="about-me-link"
              href="https://www.linkedin.com/in/anacmartins/"
              target=" _blank"
            >
              I've worked in different roles
            </a>
            : UX Analyst, SEO Analyst, Product Manager and so on. And I've never
            thought about programming again.
          </p>

          <p class="about-me-paragraph">
            But now here I am, studying Javascript and its friends (mostly React
            and Redux). Look at this website, I'm coding! Sometimes I cannot
            believe it. I know I'm quite new doing this, but I've already had a
            whole career on Internet companies and I considered myself a fast
            learner. And I say this as person who isn't comfortable compliment
            myself.
          </p>
          <p class="about-me-paragraph">
            When I'm not working or studying, I like knitting. I've learned how
            to knit when I was a teenager and I love the fact we can build
            something wearable from the scratch. Lately, I am enjoying playing
            Animal Crossing. My favorite villager is{" "}
            <a
              className="about-me-link"
              href="https://www.bluebirdhastoldme.com/villager/benedict"
              target="_blank"
            >
              Benedict
            </a>
            . I like how easy going he is.{" "}
          </p>

          <p class="about-me-paragraph">
            I am really enjoying coding and build things. I am totally obsessed
            about the possibilities code gives to me. I may sound silly, but I
            think it's kinda magic. It's like knit a jumper: in a moment we have
            nothing, and after some calcultion we have something wearable,
            usable, useful. I'd like to become a professional frontend
            developer. I've been making{" "}
            <a
              className="about-me-link"
              href="https://github.com/anamartins"
              target="_blank"
            >
              some projects for fun
            </a>{" "}
            and I'd like to work in a good team learning new things and build
            good stuff.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
