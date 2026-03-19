import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SkillsServices } from "@/components/SkillsServices";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SkillsServices />
      <Projects />
      <Footer />
    </main>
  );
}
