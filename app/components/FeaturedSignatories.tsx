import Image from "next/image";
import SignatoriesIcons from "./icons/Signatories_Icons";

const signatories = [
	{
		name: "Abdul Malik",
		role: "Vice President",
		description:
			"An aid to the president and in charge of organising throughout the year.",
		imageSrc: "/committee_photos/Abdul_Image.jpg",
	},
	{
		name: "Alessio Vigliotta",
		role: "President",
		description:
			"In charge of overseeing everything in the society and reaching out to sponsors.",
		imageSrc: "/committee_photos/Alessio_Image.png",
	},
	{
		name: "Angela Melbourne",
		role: "Treasurer",
		description:
			"Manages the society's finances, keeping our budget balanced.",
		imageSrc: "/committee_photos/Angela_Image.png",
	},
];

export default function FeaturedSignatories() {
	return (
		<>	
			<section id="signatories" className="relative w-full text-white">
				<SignatoriesIcons />
				<div className="pointer-events-none absolute inset-0 z-0">
					<div className="absolute inset-0 bg-black" />
				</div>
				<div className="relative z-20 mx-auto max-w-6xl px-6 py-0 sm:py-0 lg:py-0">
					<div className="mx-auto h-px w-4/5 bg-white" />
					<div className="mt-10 text-center">
						<p className="text-sm sm:text-base uppercase tracking-[0.2em] text-white">
							Meet the team
						</p>
						<h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
							Featured signatories
						</h2>
					</div>

					<div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 text-black shadow-[0_18px_48px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12">
						<div className="grid gap-8 md:grid-cols-3">
							{signatories.map((person) => (
								<div
									key={person.name}
									className="flex h-full flex-col items-center text-center"
								>
									<div className="relative h-28 w-28 overflow-hidden rounded-full border border-black/10 bg-black/5">
										<Image
											src={person.imageSrc}
											alt={person.name}
											fill
											className="object-cover"
											sizes="112px"
										/>
									</div>
									<h3 className="mt-5 text-lg font-semibold text-black">
										{person.name}
									</h3>
									<p className="mt-1 text-sm uppercase tracking-[0.2em] text-black/60">
										{person.role}
									</p>
									<p className="mt-4 text-sm text-black/70 leading-6">
										{person.description}
									</p>
								</div>
							))}
						</div>

						<div className="mt-10 flex justify-center bg-transparent">
							<a
								href="/committee"
								className="btn-outline-fancy btn-outline-fancy-ghost text-base"
							>
								<span className="relative z-10">View the whole team</span>
							</a>
						</div>
					</div>
					<div className="mt-12 sm:mt-18 mx-auto h-px w-4/5 bg-white" />
				</div>
			</section>
		</>
	);
}
