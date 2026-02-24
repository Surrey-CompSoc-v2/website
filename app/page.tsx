import Hero from "./components/Hero";
import type { Metadata } from "next";
import EventTypes from "./components/Event_Types";
import FeaturedSignatories from "./components/FeaturedSignatories";
import Socials from "./components/Socials";
import Footer from "../components/Footer";
import LandingHero from "./components/LandingHero";

export const metadata: Metadata = {
  title: "Homepage ↠ Surrey CompSoc",
};

export default function Home() {
  return (
    <div className="bg-black font-tomorrow">
      <LandingHero />
      <section className="relative w-full bg-black text-white">
        <Hero />
      </section>
      <section className="relative w-full bg-black text-white">
        <EventTypes />
      </section>
      <section className="relative w-full bg-black text-white">
        <FeaturedSignatories />
      </section>
      <section className="relative w-full bg-black text-white">
        <Socials />
      </section>
      <section className="relative w-full bg-black text-white">
        <Footer />
      </section>
    </div>
  );
}
