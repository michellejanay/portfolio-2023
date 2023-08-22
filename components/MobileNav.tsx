import React from "react";
import { navLinks } from "@/lib/nav-data";
import { motion } from "framer-motion";

export const MobileNav = () => {
  return (
    <nav>
      <ul className="hidden">
        {navLinks.map((link) => (
          <li>{link.text}</li>
        ))}
      </ul>
    </nav>
  );
};
