"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Play error:", err);
        setHasError(true);
      });
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full py-12 bg-transparent z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
className="relative w-full aspect-video border-2 border-kardo-accent/60 overflow-hidden bg-black/40 backdrop-blur-md"      >
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-white/60 gap-4">
            <p className="text-lg">Video format not supported</p>
            <p className="text-sm">Please convert to MP4 (H.264)</p>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              controls
              className="w-full h-full object-cover"
              poster="/images/our-ip-hero.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
            >
              <source src="/images/im-from-space-trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4 z-10 bg-black/30 cursor-pointer"
                onClick={handlePlay}
              >
                <button className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 transition-transform bg-black/50">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="text-sm tracking-widest text-white/70">WATCH THE TRAILER</span>
              </div>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
}