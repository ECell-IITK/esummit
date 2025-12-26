"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhatWeDoCard({ title, img, desc, website }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 85%", "start 45%"], // 🔥 compressed range = fast drop
  });

  // 🚀 FAST GRAVITY DROP
  const dropY = useTransform(scrollYProgress, [0, 1], [-180, 0]);
  const dropOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <div
      ref={cardRef}
      className="
        relative
        h-full
        rounded-2xl
        overflow-hidden
        bg-[#0b1416]/70
        backdrop-blur-md
        border border-white/10
        hover:border-[#6fe9dc]/40
        transition-all
      "
    >
      {/* IMAGE DROP */}
      <motion.div
        style={{ y: dropY, opacity: dropOpacity }}
        transition={{
          duration: 0.45,              // 🔥 FAST
          ease: [0.16, 1, 0.3, 1],       // gravity snap
        }}
        className="
          relative
          w-full
          h-[220px]
          md:h-[240px]
          overflow-hidden
        "
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover scale-[1.05]"
          loading="lazy" decoding="async"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <div className="px-5 py-6 flex flex-col gap-3 text-justify">
        <h3
          className="
            text-xl
            font-black
            uppercase
            tracking-wide
            bg-gradient-to-r
            from-[#24BEB0]
            via-[#6fe9dc]
            to-white
            bg-clip-text
            text-transparent
          "
        >
          {title}
        </h3>

        <p className="text-sm md:text-[0.95rem] text-white/80 leading-relaxed">
          {desc}
        </p>

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-3
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            px-5
            py-2
            text-sm
            font-semibold
            text-[#0b1416]
            bg-gradient-to-r
            from-[#24BEB0]
            to-[#6fe9dc]
            hover:brightness-110
            transition-all
          "
        >
          Visit Website →
        </a>
      </div>
    </div>
  );
}
