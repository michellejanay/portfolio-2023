"use client";
import { useState } from "react";
import { projects } from "@/lib/projects-data";

export const Projects = () => {
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(false);

  let level: number = -4;
  return (
    <div className="pb-3">
      <h1 className="text-center mt-20 text-[3em]">Projects</h1>
      <div
        className="flex flex-col justify-center content-center align-center bg-black py-6 rounded-3xl my-3"
        id="projects"
      >
        {projects
          .map((project, i) => (
            <div className="grid grid-cols-5">
              <div className="px-3 uppercase
              ">Level {(level + i) * -1}</div>
              <img src="" alt={project.title} />
              <article className="p-4 border rounded m-3 col-start-3 col-end-6 hover:bg-pink-500">
                <h3 className="uppercase my-3">{project.title}</h3>
                <p className="my-3">
                  <span className="font-bold">Technologies:</span>{" "}
                  {project.technologies}
                </p>
                <div className="pt-3 my-3">
                  <a
                    href={project.source}
                    className="btn py-2 px-4 mr-3 bg-green-500 rounded"
                  >
                    Source code
                  </a>
                  <a
                    href={project.deployment}
                    className="btn py-2 px-4 ml-3 bg-green-500 rounded"
                  >
                    Deployment
                  </a>
                </div>
              </article>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};
