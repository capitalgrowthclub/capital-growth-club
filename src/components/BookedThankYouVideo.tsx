"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL = "https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/69effa2705d419900125096d.mp4";

export default function BookedThankYouVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [unmuted, setUnmuted] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.controls = true;
    v.play().catch(() => {});
    setUnmuted(true);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-brand-card"
        style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
      >
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
        />
        {!unmuted && (
          <button
            onClick={handleUnmute}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
            aria-label="Tap to unmute"
          >
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M12 8l16 8-16 8V8z"
                  fill="#0E0E0E"
                  stroke="#0E0E0E"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
      <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-brand-gold/20 rounded-br-2xl pointer-events-none" />
      <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-brand-gold/20 rounded-tl-2xl pointer-events-none" />
    </div>
  );
}
