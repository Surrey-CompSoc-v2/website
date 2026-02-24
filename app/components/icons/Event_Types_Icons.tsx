import { 
	FaLaptopCode,
	FaHammer,
	FaBug,
	FaDocker,
	FaAws,
	FaPython,
	FaRust,
} from "react-icons/fa";

import { IoLogoGithub } from "react-icons/io";
import { IoGameController, IoLogoJavascript } from "react-icons/io5";
import { MdRocketLaunch } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";

export default function EventTypesIcons() {
	return (
		<div className="hero-icon-layer pointer-events-none absolute inset-0 overflow-hidden hidden lg:block">
			<FaPython
				className="absolute left-55 top-180 h-12 w-12 text-[#f97316]/50 blur-[0.3px]"
				aria-hidden="true"
			/>
			<FaLaptopCode
				className="absolute right-5 top-10 h-12 w-12 text-[#30c0a5]/45 blur-[0.4px]"
				aria-hidden="true"
			/>
			<FaDocker
				className="absolute right-120 bottom-10 h-12 w-12 text-[#688ac7]/35 blur-[0.5px]"
				aria-hidden="true"
			/>
			<IoLogoGithub
				className="absolute right-65 top-50 h-12 w-12 text-[#22c55e]/40 blur-[0.4px]"
				aria-hidden="true"
			/>
			<IoGameController
				className="absolute left-50 top-40 h-12 w-12 -translate-x-1/2 text-[#a34ee0]/35 blur-[0.4px]"
				aria-hidden="true"
			/>
			<FaHammer
				className="absolute right-30 top-110 h-12 w-12 translate-x-1/2 text-[#facc15]/40 blur-[0.45px]"
				aria-hidden="true"
			/>
			<FaAws
				className="absolute left-10 top-108 h-12 w-12 -translate-y-1/2 text-[#3b82f6]/35 blur-[0.35px]"
				aria-hidden="true"
			/>
			<VscAzure
				className="absolute right-85 top-157 h-12 w-12 -translate-y-1/2 text-[#6366f1]/35 blur-[0.35px]"
				aria-hidden="true"
			/>
			<FaRust
				className="absolute right-0 top-210 h-14 w-14 -translate-y-1/2 text-[#ef4444]/35 blur-[0.35px]"
				aria-hidden="true"
			/>
			<PiFileCpp
				className="absolute right-68 top-270 h-12 w-12 -translate-y-1/2 text-[#a855f7]/35 blur-[0.35px]"
				aria-hidden="true"
			/>
			<IoLogoJavascript
				className="absolute right-5 bottom-20 h-12 w-12 -translate-y-1/2 text-[#84cc16]/35 blur-[0.35px]"
				aria-hidden="true"
			/>
			<FaBug
				className="absolute left-0 top-220 h-12 w-12 -translate-x-1/2 text-[#f43f5e]/30 blur-[0.5px]"
				aria-hidden="true"
			/>
			<MdRocketLaunch
				className="absolute left-90 bottom-70 h-12 w-12 -translate-x-1/2 text-[#a34ee0]/30 blur-[0.5px]"
				aria-hidden="true"
			/>
			<SiGooglecloud
				className="absolute left-25 bottom-30 h-12 w-12 -translate-x-1/2 text-[#30c0a5]/30 blur-[0.5px]"
				aria-hidden="true"
			/>
		</div>
	);
}
