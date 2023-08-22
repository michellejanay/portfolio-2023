"use client";
import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/nav-data";
import Link from "next/link";

export const DesktopNav = () => {
  return (
    <nav className="min-w-full flex justify-center z-[999] fixed px-4">
      <ul className="flex flex-wrap justify-cetner align-center justify-between">
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
              className="w-full px-4 py-3 hover:text-violet-200 transition"
            >
              {link.text}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
