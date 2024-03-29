import Intro from "@/components/intro";
import Divider from "@/components/divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <Divider />
        <About />
        <Projects />
        <Skills />
        <Experience />
    </main>
  );
}
