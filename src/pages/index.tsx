import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Service } from "@/components/Service";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <Header />
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
