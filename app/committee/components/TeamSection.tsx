"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { CommitteeMember } from "../../data/committee";

type TeamSectionProps = {
  group: string;
  members: CommitteeMember[];
};

function CornerFrame() {
  return (
    <div className="pointer-events-none absolute inset-2 z-0 bg-black text-white/80">
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

const easing: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

export default function TeamSection({ group, members }: TeamSectionProps) {
  return (
    <motion.div
      className="mt-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Team</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          {group}
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <motion.div
            key={member.name}
            className="flex flex-col gap-0"
            variants={cardVariants}
          >
            <article className="relative flex flex-col overflow-hidden bg-transparent p-7 text-white">
              <CornerFrame />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="relative h-48 w-48 overflow-hidden border border-white/10 bg-white/5 sm:h-56 sm:w-56">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 224px, (min-width: 640px) 224px, 192px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/60">
                      Photo
                    </div>
                  )}
                </div>
                <h3 className="text-center text-xl font-semibold uppercase tracking-[0.08em]">
                  {member.name}
                </h3>
              </div>
            </article>

            <article className="relative flex min-h-[180px] flex-col overflow-hidden bg-transparent p-7 text-white">
              <CornerFrame />
              <div className="relative z-10 flex h-full flex-col">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-white/60">
                  {member.role}
                </span>
                <div className="mt-3 h-px w-16 bg-white/20" />
                <p className="mt-4 text-sm leading-6 text-white/70">
                  {member.description}
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-white/60">
                    <span className="h-2 w-2 bg-white" aria-hidden="true" />
                    {member.year}
                  </span>
                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} LinkedIn`}
                        className="group relative transition-transform duration-150 hover:-translate-y-0.5"
                      >
                        <FaLinkedin className="h-5 w-5 text-white" />
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 shadow transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                          LinkedIn
                        </span>
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        aria-label={`${member.name} GitHub`}
                        className="group relative transition-transform duration-150 hover:-translate-y-0.5"
                      >
                        <FaGithub className="h-5 w-5 text-white" />
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 shadow transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                          GitHub
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
