import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Projectcard } from "@/components/Projectcard";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <About/>
      <Experience/>
      <Projectcard/>
      <Skills />
      <Footer />
    </div>
  </main>
  );
}
