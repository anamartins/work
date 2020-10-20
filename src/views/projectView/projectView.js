import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectView() {
  let { slug } = useParams();

  return <div className="project">hey{console.log("hey", slug)}</div>;
}
