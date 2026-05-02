"use client";

import { useState } from "react";

type FaqVideo = {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  duration?: string;
};

const faqVideos: FaqVideo[] = [
  {
    id: "what-to-expect",
    title: "What to expect on the strategy call",
    description:
      "A walkthrough of how the call is structured, what we'll cover, and what you'll walk away with — even if we don't end up working together.",
    duration: "3 min",
  },
  {
    id: "pricing",
    title: "Why our engagements are priced the way they are",
    description:
      "How we price retainers, what's included, and why our model is designed for businesses ready to deploy real capital into a real system.",
    duration: "4 min",
  },
  {
    id: "results-timeline",
    title: "How long until you see real results",
    description:
      "The 90/180-day rhythm — how we approach the first quarter (testing, learning, dialing in) and the second quarter (squeezing every dollar of output).",
    duration: "3 min",
  },
  {
    id: "different-from-agencies",
    title: "How we're different from other agencies",
    description:
      "Why hiring a media buyer, a funnel builder, and a CRM consultant separately almost always fails — and what one team owning the whole system actually changes.",
    duration: "5 min",
  },
  {
    id: "burned-before",
    title: "If you've been burned by agencies before",
    description:
      "What separates a real cold acquisition build from the agencies that took your money and disappeared. How we structure the engagement to make sure that doesn't happen here.",
    duration: "4 min",
  },
  {
    id: "right-fit",
    title: "Is your business actually the right fit",
    description:
      "We don't take every business that applies. Here's exactly the kind of operator and business we work with — and the ones we politely turn down.",
    duration: "3 min",
  },
];

export default function FaqVideoGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {faqVideos.map((video) => {
        const isActive = activeId === video.id;
        return (
          <div
            key={video.id}
            className={`bg-brand-card border rounded-2xl overflow-hidden transition-all duration-300 ${
              isActive ? "border-brand-gold/30" : "border-white/10"
            }`}
          >
            <div className="relative aspect-video bg-brand-black">
              {isActive && video.videoUrl ? (
                <video
                  className="w-full h-full object-cover"
                  src={video.videoUrl}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <button
                  onClick={() => video.videoUrl && setActiveId(video.id)}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-card to-brand-black hover:bg-brand-card transition-colors group"
                  disabled={!video.videoUrl}
                >
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M12 8l16 8-16 8V8z"
                        fill="#0E0E0E"
                        stroke="#0E0E0E"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {!video.videoUrl && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-white/40">
                      Coming soon
                    </div>
                  )}
                </button>
              )}
              {video.duration && !isActive && (
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 text-[11px] text-white/80 backdrop-blur-sm">
                  {video.duration}
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{video.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {video.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
