import { Cta } from "@/components/Cta";
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
    </>
  );
}
