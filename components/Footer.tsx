"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import { GiDeer } from "react-icons/gi";
import { navLinks } from "../app/data/navLinks";
import { socials } from "../app/data/socials";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto h-px w-3/4 bg-white/80" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:justify-between">
          <div className="flex h-full flex-col gap-6">
            <Image
              src="/compsoc_graphics/old_logo_grouped 2023.bacee5f.png"
              alt="Surrey CompSoc logo"
              width={520}
              height={240}
              className="h-auto w-full max-w-[520px]"
            />
          </div>

          <nav className="grid h-full grid-cols-2 gap-x-4 gap-y-2 font-source-code text-[11px] uppercase tracking-[0.2em] text-white/80 md:flex md:flex-col md:gap-3 md:text-sm">
            {navLinks.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="group flex items-center gap-2 transition-colors hover:text-white"
              >
                <FaChevronRight className="h-2.5 w-2.5" aria-hidden="true" />
                <span>{link.label}</span>
                <GiDeer
                  className="h-3 w-3 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between sm:text-center md:text-left">
          <div className="font-source-code text-sm leading-relaxed text-white/80">
            <p>©2023-2026 University of Surrey Computing Society.</p>
            <p>
              Made by{" "}
              <a
                href="https://www.linkedin.com/in/cristina-gheorghe-0a6053285/"
                className="group relative text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 font-semibold underline underline-offset-4 decoration-white/60"
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
                className="group relative text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 font-semibold underline underline-offset-4 decoration-white/60"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raghav Commandur
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 shadow transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                  Contact Raghav
                </span>
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6 text-white/70">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group relative transition-colors hover:text-white"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.Icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5" aria-hidden="true" />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 shadow transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                  {social.name}
                </span>
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              aria-label="Back to top"
            >
              <FaChevronUp className="h-2.5 w-2.5" aria-hidden="true" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
