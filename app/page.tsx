import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Prices from "@/components/prices";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Prices />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
}
