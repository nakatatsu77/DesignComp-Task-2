import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Service } from "@/components/Service";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Service />
        <Works />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
