import {
    FaRobot,
    FaCrown,
    FaPencilAlt,
    FaMicrophone,
    FaMobile,
    FaDiscord,
    FaGraduationCap,
    FaInstagram,
    FaShieldAlt,
    FaLinkedin,
} from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FiHash } from "react-icons/fi";
import { IoChatbubbleEllipses } from "react-icons/io5";

export default function SocialsIcons() {
    return (
        <div className="hero-icon-layer pointer-events-none absolute inset-0 z-10 overflow-hidden hidden lg:block">
            <IoChatbubbleEllipses
                className="absolute right-115 top-15 h-12 w-12 text-[#a34ee0]/45 blur-[0.4px]"
                aria-hidden="true"
            />
            <FaDiscord
                className="absolute right-90 bottom-35 h-12 w-12 text-[#30c0a5]/40 blur-[0.4px]"
                aria-hidden="true"
            />
            <FaInstagram
                className="absolute left-90 top-40 h-12 w-12 -translate-x-1/2 text-[#3b82f6]/35 blur-[0.4px]"
                aria-hidden="true"
            />
            <FaGraduationCap
                className="absolute right-40 bottom-65 h-12 w-12 translate-x-1/2 text-[#f97316]/40 blur-[0.45px]"
                aria-hidden="true"
            />
            <FaLinkedin
                className="absolute left-5 bottom-35 h-12 w-12 -translate-y-1/2 text-[#688ac7]/35 blur-[0.35px]"
                aria-hidden="true"
            />
            <FiHash
                className="absolute right-0 bottom-0 h-12 w-12 -translate-y-1/2 text-[#facc15]/35 blur-[0.35px]"
                aria-hidden="true"
            />
            <FaShieldAlt
                className="absolute left-65 bottom-5 h-12 w-12 -translate-x-1/2 text-[#22c55e]/30 blur-[0.5px]"
                aria-hidden="true"
            />
        </div>
    );
}
