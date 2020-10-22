import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsContent } from "../../content/projectContent";

import "./style.scss";

export default function ProjectView() {
  let { slug } = useParams();
  let [index, setIndex] = useState(0);
  let name = projectsContent[index].name;
  let url = projectsContent[index].url;
  let text = projectsContent[index].text;

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
      <h1>{name}</h1>
      <img className="project-img" src={`../../img/${slug}.png`} />

      <p>{text}</p>
      <p>{url}</p>
    </div>
  );
}
