"use client";
import Spinner from "./animations/nav/Spinner";
import { BiCog } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";

export const Skills = () => {
  return (
    <div className="text-center my-20">
      <h1 className="text-[3em] my-3">Skills</h1>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="my-6">
          <Spinner icon={BiCog} />
          <h3 className={`text-[2em] font-bold m-3`}>Soft</h3>
          <ul>
            <li>Communication</li>
            <li>Dedication</li>
            <li>Resilience</li>
            <li>Continious Learning</li>
            <li>Team work</li>
          </ul>
        </div>
        <div className="my-6 mt-9">
          <div>
            <Spinner icon={FaLaptopCode} />
          </div>
          <h3 className="text-[2em] font-bold m-3">Tech</h3>
          <ul>
            <li>JavaScript/TypeScript/jQuery</li>
            <li>React/Next/Svelte</li>
            <li>Tailwind/Bootstrap</li>
            <li>Node/Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
