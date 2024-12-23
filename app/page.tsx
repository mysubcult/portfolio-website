import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Prices from "@/components/prices";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";
import Head from "next/head"; // Импортируем Head

export default function Home() {
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="3bf07cdf9c04392c" />
      </Head>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Prices />
        <Services />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
