'use client';

import { CalendarEvent } from "@/lib/googleCalendar";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function CornerFrame() {
  return (
    <div className="pointer-events-none absolute -inset-2 z-20 text-white/80">
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

interface EventModalProps {
  event: CalendarEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

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

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="w-full max-w-2xl rounded-3xl bg-black text-white relative"
          onClick={(e) => e.stopPropagation()}
        >
          <CornerFrame />
          <div className="relative z-10">
            {event.image && (
              <div className="aspect-video w-full overflow-hidden border-b border-white/10 rounded-t-3xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover rounded-t-3xl"
                />
              </div>
            )}

            <div className="p-8">
              <h2 className="text-3xl font-bold">{event.title}</h2>

              <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-base">📅</span>
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🕐</span>
                  <span>{formattedStartTime}-{formattedEndTime}</span>
                </div>
              </div>

              {event.location && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span className="shrink-0 text-base">📍</span>
                  <span className="italic">{event.location}</span>
                </a>
              )}

              {event.description && (
                <p className="mt-6 leading-relaxed text-white/70">
                  {event.description}
                </p>
              )}

              <div className="mt-8 flex justify-center">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-fancy inline-flex"
                >
                  <span className="relative z-10 inline-flex justify-center py-3 px-6 text-sm font-bold">
                    Add to Calendar
                  </span>
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 hover:scale-110 hover:cursor-crosshair text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}
