import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";
import EventTypesIcons from "@/app/components/icons/Event_Types_Icons";
import { eventCards } from "@/app/data/events";

export default function EventTypes() {
    return (
        <section id="about" className="relative w-full bg-black text-white">
            <EventTypesIcons />
            <div className="mx-auto max-w-6xl px-6 pt-4 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24">
                <div className="text-center">
                    <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-white/70">
                        What do we do?
                    </p>
                    <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                        Our events
                    </h2>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {eventCards.map((card) => (
                        <SpotlightCard key={card.id} className="w-full">
                            <article className="flex h-full min-h-[420px] flex-col md:min-h-[460px] lg:min-h-[500px]">
                                <div className="relative h-52 w-full overflow-hidden md:h-60 lg:h-64">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-xl font-semibold text-white">
                                        {card.title}
                                    </h3>
                                    <div className="mt-3 h-px w-16 bg-white/30" />
                                    <p className="mt-4 text-sm text-white/75 leading-6">
                                        {card.description}
                                    </p>
                                </div>
                            </article>
                        </SpotlightCard>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link href="/coming-soon" className="btn-outline-fancy text-base">
                        <span className="relative z-10">See all events</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
