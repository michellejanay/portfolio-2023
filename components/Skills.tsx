"use client";
import { useState } from "react";
import { BiCog } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";

export const Skills = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className="text-center my-20">
      <h1 className="text-[3em] my-3">Skills</h1>
      <div className="flex justify-evenly">
        <div className="">
          <div className="flex justify-center m-6 md:hover:animate-spin">
            <BiCog size="8em" />
          </div>
          <h3
            className="text-[2em] font-bold m-6 
          "
          >
            Soft
          </h3>
          <ul>
            <li>Communication</li>
            <li>Dedication</li>
            <li>Resilience</li>
            <li>Continious Learning</li>
            <li>Team work</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-center m-6 hover:animate-spin">
            <FaLaptopCode size="8em" />
          </div>
          <h3 className="text-[2em] font-bold m-6">Tech</h3>
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
