import FloatingLines from "../../components/FloatingLines";

export default function LandingHero() {
  return (
    <section
      id="floatinglines"
      style={{ marginTop: "calc(var(--navbar-height, 0px) * -1)" }}
    >
      <div className="absolute inset-0 opacity-50">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={4}
          interactive={false}
        />
      </div>

      <div className="relative flex items-center justify-center px-6 min-h-[70vh] md:min-h-[75vh] lg:min-h-screen">
        <div className="max-w-5xl text-center">
          <h1 className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            SURREY COMPSOC
          </h1>
          <p className="mt-8 text-white/90 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8">
            <span className="sm:hidden">
              We run
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 font-semibold">
                academic and social events
              </span>
              on a monthly basis for
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 font-semibold">
                coders and non-coders
              </span>
              alike, as well as bigger events throughout the year. You can learn
              to code or participate in
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-400 font-semibold">
                game jams
              </span>
              ,
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-lime-300 to-amber-300 font-semibold">
                hackathons
              </span>
              and more.
            </span>
            <span className="hidden sm:inline">
              We run
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 font-semibold">
                academic and social events
              </span>
              on a monthly basis for
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 font-semibold">
                coders and non-coders
              </span>
              alike, as well as bigger events throughout the year. You can learn
              to code or participate in beginner, intermediate or advanced
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-400 font-semibold">
                game jams
              </span>
              (game building competitions),
              <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-lime-300 to-amber-300 font-semibold">
                hackathons
              </span>
              and more.
            </span>
          </p>
          <p className="mt-4 text-white/85 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8">
            Students from
            <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 font-semibold">
              all courses are welcome
            </span>
            - computer industries involve people with very different skill sets
            from very different backgrounds, some of which do not even involve
            computers!
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
        <span className="mb-2 text-sm tracking-wide">Scroll</span>
        <svg
          className="animate-bounce"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16l-5-5m5 5l5-5m-5 5V4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
