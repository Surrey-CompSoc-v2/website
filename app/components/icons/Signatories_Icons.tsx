import { 
    FaRobot,
    FaCrown,
    FaPencilAlt,
    FaMicrophone,
    FaClipboardList,
    FaMobile,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function SignatoriesIcons() {
    return (
        <div className="hero-icon-layer pointer-events-none absolute inset-0 z-10 overflow-hidden hidden lg:block">
            <FaLocationDot
                className="absolute right-55 top-20 h-12 w-12 text-[#688ac7]/45 blur-[0.4px]"
                aria-hidden="true"
            />
            <FaMicrophone
                className="absolute right-90 top-65 h-12 w-12 text-[#f97316]/40 blur-[0.4px]"
                aria-hidden="true"
            />
            <FaRobot
                className="absolute left-70 top-30 h-12 w-12 -translate-x-1/2 text-[#3b82f6]/35 blur-[0.4px]"
                aria-hidden="true"
            />
            <FaClipboardList
                className="absolute right-10 bottom-50 h-12 w-12 translate-x-1/2 text-[#22c55e]/40 blur-[0.45px]"
                aria-hidden="true"
            />
            <FaCrown
                className="absolute left-5 bottom-75 h-12 w-12 -translate-y-1/2 text-[#a34ee0]/35 blur-[0.35px]"
                aria-hidden="true"
            />
            <FaMobile
                className="absolute right-65 bottom-15 h-12 w-12 -translate-y-1/2 text-[#facc15]/35 blur-[0.35px]"
                aria-hidden="true"
            />
            <FaPencilAlt
                className="absolute left-95 bottom-50 h-12 w-12 -translate-x-1/2 text-[#30c0a5]/30 blur-[0.5px]"
                aria-hidden="true"
            />
            <FaHeart
                className="absolute left-45 bottom-0 h-12 w-12 -translate-x-1/2 text-[#ec4899]/30 blur-[0.5px]"
                aria-hidden="true"
            />
        </div>
    );
}
