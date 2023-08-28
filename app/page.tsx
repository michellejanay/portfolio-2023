"use client";
import { Nav } from "@/components/Nav";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";
import { navLinks } from "@/lib/nav-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 font-mono flow-root ">
      <Nav navLinks={navLinks} />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer navLinks={navLinks} />
    </main>
  );
}
