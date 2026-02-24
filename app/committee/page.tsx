import type { Metadata } from "next";
import Footer from "../../components/Footer";
import { committeeMembers } from "../data/committee";
import TeamSection from "./components/TeamSection";

export const metadata: Metadata = {
  title: "Committee ↠ Surrey CompSoc",
};

const groups = ["Signatories", "Wellbeing Champions", "Non-Signatories"] as const;

export default function CommitteePage() {
  return (
    <div className="bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Committee Members
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Our Committee
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/70 sm:text-base">
            Meet the people shaping CompSoc, organizing events, and keeping our
            community connected.
          </p>
        </div>

        {groups.map((group) => (
          <TeamSection
            key={group}
            group={group}
            members={committeeMembers.filter((member) => member.group === group)}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
