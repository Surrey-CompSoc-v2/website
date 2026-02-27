'use client';

import { CalendarEvent } from "@/lib/googleCalendar";
import { useState } from "react";
import { motion } from "framer-motion";
import EventModal from "./EventModal";  // modal will portal to body


function CornerFrame() {
  return (
    <div className="pointer-events-none absolute inset-2 z-0 bg-transparent text-white/80">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 rotate-90"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 rotate-180"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 -rotate-90"
        aria-hidden="true"
      >
        <path
          d="M0.5 47.5V12.5L13 0.5H47.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

const easing: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

interface EventCardProps {
  event: CalendarEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dateObj = new Date(event.start);
  const endObj = new Date(event.end);
  
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedStartTime = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedEndTime = endObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative group flex flex-col rounded-2xl p-6 overflow-hidden transition-all cursor-pointer hover:bg-white/[0.05]">
          <CornerFrame />
          {/* no outline; frame only */}
          <div className="relative z-10 flex flex-col">
        {event.image && (
          <div className="aspect-video w-full overflow-hidden border-b border-white/10">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-col mt-4">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/60">
            <span>{formattedDate}</span>
            <span>{formattedStartTime}-{formattedEndTime}</span>
          </div>

          <h3 className="mt-3 text-xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-300 hover:via-cyan-300 hover:to-teal-300 transition-colors">
            {event.title}
          </h3>
        </div>
          </div>      </div>
      </motion.div>

      <EventModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}