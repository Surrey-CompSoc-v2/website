import type { Metadata } from "next";
import Footer from "../../components/Footer";
import FloatingLines from "../../components/FloatingLines";
import { getEvents } from "@/lib/googleCalendar";
import EventCard from "./components/EventCard";
import { socials } from "../data/socials";

export const metadata: Metadata = {
  title: "Events ↠ Surrey CompSoc",
};

export default async function EventsPage() {
  const allEvents = await getEvents();
  const now = new Date();

  const upcoming = allEvents.filter(e => new Date(e.start) >= now);
  const past = allEvents.filter(e => new Date(e.start) < now);

  return (
    <div className="bg-black text-white font-tomorrow">
      <section className="relative w-full bg-black text-white">
        <div className="absolute inset-0 opacity-50">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={3}
            interactive={false}
          />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 text-center z-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Society Events
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Events
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/70 sm:text-base">
            Come and join our events and become part of the community!
          </p>
          <div className="mt-6 mb-6">
            <a
              href={`https://calendar.google.com/calendar/render?cid=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID}`}
              target="_blank"
              className="btn-outline-fancy"
            >
              <span className="relative z-10 inline-flex items-center gap-2 sm:text-base">
                📅 Add Calendar to your App
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300">
              Upcoming
            </h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center mx-auto mt-4 max-w-3xl text-sm text-white/70 sm:text-base">
              <p>No upcoming events yet, follow our social media for updates!</p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-white/80 transition-colors"
                  >
                    <social.Icon className="text-base" aria-hidden="true" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {past.length > 0 && (
          <div className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl font-bold uppercase tracking-widest text-white/40">
                Past Memories
              </h2>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}