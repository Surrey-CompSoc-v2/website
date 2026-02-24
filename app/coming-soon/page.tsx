import Link from "next/link";
import Footer from "../../components/Footer";
import { socials } from "../data/socials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon ↠ Surrey CompSoc",
};

function CornerFrame() {
  return (
    <div className="pointer-events-none absolute inset-2 z-0 text-white/80">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 rotate-90"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 rotate-180"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 -rotate-90"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}


export default function ComingSoonPage() {
  return (
    <>
      <main className="relative  min-h-[75vh] bg-black text-white">
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-xl flex-col justify-center gap-6 text-center md:w-1/2 md:max-w-none md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Coming soon</p>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              A new space is on the way.
            </h1>
            <p className="text-base text-white/70 sm:text-lg">
              We're building this page and soon will showcase something amazing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Link
                href="/"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Back to home
              </Link>
              <a
                href="https://surreyunion.org/your-activity/clubs-and-societies-a-z/compsoc"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a membership
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-md md:w-1/2 md:max-w-none">
            <div className="relative overflow-hidden bg-transparent p-8">
              <CornerFrame />
              <div className="relative z-10 flex flex-col gap-6">
                <div>
                  <h2 className="mt-3 text-2xl font-semibold">Want updates on when new content is released?</h2>
                  <p className="mt-3 text-sm text-white/70">
                    Check out our socials and stay tuned! Our webmasters{" "}
                    <a
                      href="https://www.linkedin.com/in/cristina-gheorghe-0a6053285/"
                      className="group relative text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 font-semibold hover:underline hover:underline-offset-4 decoration-white/60"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cristina Gheorghe
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 shadow transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                        Contact Cristina
                      </span>
                    </a>
                    {" "}and{" "}
                    <a
                      href="https://www.linkedin.com/in/raghavcommandur"
                      className="group relative text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 font-semibold hover:underline hover:underline-offset-4 decoration-white/60"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Raghav Commandur
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 shadow transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                        Contact Raghav
                      </span>
                    </a>
                    {" "}are working very hard to get the content you deserve.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-white/70">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-white/40 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.Icon
                        className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
