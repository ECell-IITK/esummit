"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import introDesktop from "../assets/videos/intro3.mp4";

export default function IntroVideo({ onFinish }) {
  const [isMobile, setIsMobile] = useState(false);

  /* ===== Skip intro on slow network ===== */
  useEffect(() => {
    const conn = navigator.connection;
    if (conn?.effectiveType === "2g" || conn?.saveData) {
      onFinish();
    }
  }, [onFinish]);

  /* ===== Detect screen size ===== */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <video
          src={introDesktop}
          autoPlay
          muted
          playsInline
          preload="metadata"
          onEnded={onFinish}
          className={`
            w-full h-full
            ${isMobile ? "object-contain scale-[1.00]" : "object-cover"}
          `}
        />
      </motion.div>
    </AnimatePresence>
  );
}
