import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsContent } from "../../content/projectContent";
import Header from "../../components/header/header";

import "./style.scss";

export default function ProjectView() {
  let { slug } = useParams();
  let [index, setIndex] = useState(0);
  let name = projectsContent[index].name;
  let url = projectsContent[index].url;
  let text = projectsContent[index].text;
  let stack = projectsContent[index].stack;

  function findProject() {
    let index = projectsContent
      .map(function (e) {
        return e.slug;
      })
      .indexOf(slug);

    setIndex(index);

    console.log("index", index);
  }

  useEffect(() => {
    findProject();
  });

  return (
    <div className="project">
      <Header />

      <h1 className="project-name">{name}</h1>

      <div className="project-stack">
        {stack.map((element, index) => (
          <p className="element-stack" key={index}>
            {element}
          </p>
        ))}
      </div>

      <div className="project-img">
        <a href={url} target="_blank">
          <img src={`../../img/${slug}.png`} />
          <input type="button" value="Go!" className="single-project-btn" />
        </a>
      </div>

      <div className="project-all-text">
        {text.map((paragraph, index) => (
          <p className="project-text" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
