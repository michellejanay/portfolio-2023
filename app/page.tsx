import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 font-mono">
      <DesktopNav />
      <MobileNav />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
