import AboutInnovation from "@/components/AboutInnovation";
import Contact from "@/components/Contact";
import EcoBag from "@/components/EcoBag";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import JuteBiopolymer from "@/components/JuteBiopolymer";
import PlasticAlternative from "@/components/PlasticAlternative";
import Significance from "@/components/Significance";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutInnovation />
      <JuteBiopolymer />
      <EcoBag />
      <PlasticAlternative />
      <Significance />
      <Gallery />
      <Contact />
    </>
  );
}
