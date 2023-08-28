import React from "react";
import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

interface NavLink {
  text: string;
  to: string;
  target: string;
}

interface FooterProps {
  navLinks: NavLink[];
}

export const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  let footerLinks = navLinks.filter(
    (link) => link.text === "Linkedin" || link.text === "GitHub"
  );

  return (
    <div className="flex">
      {footerLinks.map((link) => {
        return (
          <Link
            href={link.to || "#"}
            className="hover:text-violet-200 transition"
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
        );
      })}
    </div>
  );
};
