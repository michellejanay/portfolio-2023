"use client";
import { useState } from "react";
import { projects } from "@/lib/projects-data";

export const Projects = () => {
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(false);

  return (
    <div className="flex overflow-x-scroll no-scrollbar snap-x scroll-smooth">
      {projects.map((project) => (
        <article className="p-4 border rounded m-3 w-5/6">
          <h3>{project.title}</h3>
          <a href={project.source}>Source code</a>
          <br />
          <a href={project.deployment}>Deployment</a>
          <p>
            <span className="text-bold">Technologies:</span>{" "}
            {project.technologies}
          </p>
        </article>
      ))}
    </div>
  );
};
