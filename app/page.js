import AboutInnovation from "@/components/AboutInnovation";
import Contact from "@/components/Contact";
import EcoBag from "@/components/EcoBag";
import FeatureDiagram from "@/components/FeatureDiagram";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Inventor from "@/components/Inventor";
import JuteBiopolymer from "@/components/JuteBiopolymer";
import PlasticAlternative from "@/components/PlasticAlternative";
import Significance from "@/components/Significance";

export default function Home() {
  return (
    <>
      <Hero />
      <Inventor />
      {/* <AboutInnovation /> */}
      <JuteBiopolymer />
      <EcoBag />
      <FeatureDiagram />
      <PlasticAlternative />
      <Significance />
      <Gallery />
      <Contact />
    </>
  );
}
