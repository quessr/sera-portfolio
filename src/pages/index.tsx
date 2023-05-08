import About from "@/components/sections/About";
import Main from "@/components/sections/Main";
import Navbar from "@/components/layouts/Navbar";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative bg-primary">
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Skills />
      {/**Projects */}
      {/**Contact */}
    </div>
  );
}
