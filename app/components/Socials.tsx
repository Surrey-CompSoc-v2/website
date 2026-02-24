import { socials } from "../data/socials";
import SocialsIcons from "./icons/Socials_Icons";

export default function Socials() {
  return (
    <section id="socials" className="relative w-full bg-black">
      <SocialsIcons />
      <div className="bg-black py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Our socials
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Memberships, community servers, chats and more
          </h2>
          <p>
            Join our community on WhatsApp, LinkedIn, and Discord to stay updated on the latest events, connect with fellow members, and be part of our vibrant computing community at the University of Surrey.
          </p>
          <a
            href="https://surreyunion.org/your-activity/clubs-and-societies-a-z/compsoc"
            className="btn-outline-fancy h-16 px-10 text-base sm:h-20 sm:px-14 sm:text-xl lg:h-24 lg:px-16 lg:text-2xl"
            target="_blank"
						rel="noopener noreferrer"
          >
            <span className="relative z-10">Get your membership and join us!</span>
          </a>
          <div className="mt-6 flex items-center gap-6 text-white/70">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group relative transition-colors hover:text-white"
                aria-label={social.name}
                target="_blank"
							  rel="noopener noreferrer"
              >
                <social.Icon className="h-7 w-7 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5" aria-hidden="true" />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-black opacity-0 shadow transition-all duration-200 group-hover:-top-10 group-hover:opacity-100">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
