"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";
import HeroIcons from "@/app/components/icons/Hero_Icons";
import { GiDeer } from "react-icons/gi";

export default function Hero() {
	return (
		<section id="about" className="relative w-full bg-black text-white">
			<HeroIcons />
			<div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
				<div className="text-center">
					<p className="text-sm sm:text-base uppercase tracking-[0.2em] text-white/70">
						Who are we?
					</p>
					<h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
						University of Surrey’s computing community
					</h2>
					<p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base lg:text-lg text-white/80">
						We’re the official Computer Science departmental society for the
						<a
							href="https://www.surrey.ac.uk/"
							className="group underline underline-offset-4 decoration-white/70 text-white/90 transition-colors hover:text-white px-1 rounded-sm"
							target="_blank"
							rel="noopener noreferrer"
						>
							University of Surrey
						</a>
						{" "}and the{" "}
						<a
							href="https://surreyunion.org/"
							className="group underline underline-offset-4 decoration-white/70 text-white/90 transition-colors hover:text-white px-1 rounded-sm"
							target="_blank"
							rel="noopener noreferrer"
						>
							University of Surrey Student’s Union.
							<GiDeer
								className="ml-1 inline-block h-3 w-3 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1.5 group-hover:opacity-100"
								aria-hidden="true"
							/>
						</a>
					</p>
				</div>

				<div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
					<div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
						<div className="aspect-[16/10] w-full">
							<Image
								src="/homepage_photos/Hero_Image.png"
								alt="CompSoc community"
								width={1200}
								height={750}
								className="h-full w-full object-cover"
								priority
							/>
						</div>
					</div>

					<div className="space-y-6 text-sm sm:text-base leading-6 sm:leading-7 text-white/80">
						<p>
							Join a welcoming community where beginners and experienced programmers can learn,
							build, and share projects.
						</p>
						<p>
							Expect guest speakers, careers support, hackathons and regular meetups across the year. We're connected across the UK, collaborating with other university societies and industry partners to bring you the best opportunities.
						</p>
                        <p>
                            It's all about having fun as well - we run social events like game nights, movie nights, and more to help you unwind and disconnect from everything for a bit.
                        </p>

						<div className="flex justify-center md:justify-start">
							<a
								href="https://surreyunion.org/your-activity/clubs-and-societies-a-z/compsoc"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-outline-fancy text-base"
							>
								<span className="relative z-10 items-center gap-1 flex">
									Get a{" "}
									<GradientText
										colors={["#a34ee0", "#688ac7", "#30c0a5"]}
										animationSpeed={5}
										showBorder={false}
										className="text-base text-lg font-semibold"
									>
										FREE
									</GradientText>{" "}
									 membership
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
