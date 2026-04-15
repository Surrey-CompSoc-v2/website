import {
	FiCode,
	FiCpu,
	FiDatabase,
	FiGlobe,
	FiHash,
	FiLayers,
	FiServer,
	FiTerminal,
} from "react-icons/fi";
import { LuUsersRound } from "react-icons/lu";
import { FaJava } from "react-icons/fa";

export default function HeroIcons() {
	return (
		<div className="hero-icon-layer pointer-events-none absolute inset-0 overflow-hidden hidden lg:block">
			<FiCode
				className="absolute left-5 top-8 h-12 w-12 text-[#a34ee0]/50 blur-[0.3px]"
				aria-hidden="true"
			/>
			<FiCpu
				className="absolute right-10 top-5 h-12 w-12 text-[#22c55e]/45 blur-[0.4px]"
				aria-hidden="true"
			/>
			<FiTerminal
				className="absolute left-100 bottom-0 h-12 w-12 text-[#688ac7]/45 blur-[0.4px]"
				aria-hidden="true"
			/>
			<FiDatabase
				className="absolute right-90 bottom-15 h-12 w-12 text-[#ef4444]/35 blur-[0.5px]"
				aria-hidden="true"
			/>
			<LuUsersRound
				className="absolute left-370 top-35 h-12 w-12 -translate-x-1/2 text-[#f59e0b]/40 blur-[0.4px]"
				aria-hidden="true"
			/>
			<FiLayers
				className="absolute left-60 top-45 h-12 w-12 -translate-x-1/2 text-[#30c0a5]/35 blur-[0.4px]"
				aria-hidden="true"
			/>
			<FiGlobe
				className="absolute right-40 top-100 h-12 w-12 translate-x-1/2 text-[#3b82f6]/40 blur-[0.45px]"
				aria-hidden="true"
			/>
			<FaJava
				className="absolute left-20 top-120 h-12 w-12 -translate-y-1/2 text-[#f97316]/35 blur-[0.35px]"
				aria-hidden="true"
			/>
			<FiServer
				className="absolute left-10 top-220 h-12 w-12 -translate-x-1/2 text-[#22c55e]/30 blur-[0.5px]"
				aria-hidden="true"
			/>
		</div>
	);
}
