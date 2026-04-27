'use client';

import { CalendarEvent } from "@/lib/googleCalendar";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

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

  useEffect(() => {
    if (copyStatus !== "copied") return;

    const timer = window.setTimeout(() => {
      setCopyStatus("idle");
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [copyStatus]);

  if (!event) return null;

  const hasLocation = Boolean(event.location?.trim());
  const mapsQuery = hasLocation ? encodeURIComponent(event.location.trim()) : "";

  const handleCopyLocation = async () => {
    if (!hasLocation) return;

    try {
      await navigator.clipboard.writeText(event.location.trim());
      setCopyStatus("copied");
    } catch {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = event.location.trim();
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopyStatus("copied");
      } catch {
        setCopyStatus("failed");
      }
    }
  };

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
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              key="modal"
              className={`flex flex-col w-full max-h-[90vh] rounded-3xl bg-black text-white relative ${hasLocation ? "max-w-5xl" : "max-w-2xl"}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            >
          <CornerFrame />

          {/* Scrollable inner content — scrollbar hidden visually */}
          <div className="relative z-10 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
            {event.image && (
              <div className="h-100 w-full overflow-hidden border-b border-white/10 rounded-t-3xl shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover rounded-t-3xl"
                />
              </div>
            )}

            <div className="p-6">
              <div className={hasLocation ? "lg:grid lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-5 lg:items-start" : ""}>
                <div>
                  <h2 className="text-2xl font-bold">{event.title}</h2>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="text-base">📅</span>
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">🕐</span>
                      <span>{formattedStartTime}-{formattedEndTime}</span>
                    </div>
                  </div>

                  {hasLocation && (
                    <button
                      type="button"
                      onClick={handleCopyLocation}
                      className="mt-3 flex items-start gap-2 text-left text-sm text-white/70 hover:text-white transition-colors"
                      title="Click to copy address"
                    >
                      <span className="shrink-0 text-base">📍</span>
                      <span className="italic">{event.location}</span>
                    </button>
                  )}

                  {hasLocation && copyStatus !== "idle" && (
                    <p className={`mt-1 text-xs ${copyStatus === "copied" ? "text-emerald-300" : "text-red-300"}`}>
                      {copyStatus === "copied" ? "Address copied to clipboard" : "Could not copy address"}
                    </p>
                  )}

                  {event.description && (
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      {event.description}
                    </p>
                  )}

                  <div className="mt-6 flex justify-center lg:justify-start">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-fancy inline-flex"
                    >
                      <span className="relative z-10 inline-flex justify-center py-2.5 px-5 text-sm font-bold">
                        Add to Calendar
                      </span>
                    </a>
                  </div>
                </div>

                {hasLocation && (
                  <div className="mt-5 lg:mt-0 shrink-0">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 w-full h-[300px]">
                      <iframe
                        title={`${event.title} location map`}
                        src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 hover:scale-110 hover:cursor-crosshair text-white"
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
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
