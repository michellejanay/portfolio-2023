import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

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
    <nav className="min-w-full m-auto flex z-[999] fixed px-6 py-3 justify-end">
      <ul className="flex w-1/2 justify-between">
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
