import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import Hamburger from "@/components/animations/nav/Hamburger";

interface NavLink {
  text: string;
  to: string;
  target: string;
}

interface NavProps {
  navLinks: NavLink[];
}

export const Nav: React.FC<NavProps> = ({ navLinks }) => {
  return (
    <nav className="py-3 sticky top-0 md:min-w-full md:m-auto md:flex md:z-[999] md:fixed md:px-6  md:justify-end z-[2] bg-violet-950 p-3 rounded overlay-75">
      <div className="flex justify-end mx-3 md:hidden">
        <Hamburger />
      </div>
      <ul className={"hidden md:flex w-1/2 justify-between"}>
        {navLinks.map((link, i) => (
          <motion.li
            className="mx-2 h-3/4"
            key={link.text}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 50 }}
          >
            <Link
              href={link.to || "#"}
              className="w-full hover:text-violet-200 transition"
              target={link.target}
            >
              {link.text === "GitHub" ? (
                <BiLogoGithub size="2em" className="" />
              ) : link.text === "Linkedin" ? (
                <BiLogoLinkedinSquare size="2em" />
              ) : (
                link.text
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
