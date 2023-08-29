import React, { useState } from "react";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { navLinks } from "@/lib/nav-data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row-reverse;
`;

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: 100 }} // Initial state
            animate={{ opacity: 1, x: 0 }} // Final state
            transition={{ ease: "easeIn", duration: 0.5 }} // Ease-in transition
            exit={{ opacity: 0, x: 100, transition: { ease: "easeOut" } }}
            className={isOpen ? "fixed" : "hidden "}
          >
            {navLinks.map((link, i) => (
              <li className="z-99 py-2" key={link.text}>
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
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </HamburgerMenuContainer>
  );
};

export default Hamburger;
