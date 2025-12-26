"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import bg from "../assets/images/background1 (1).svg";
import mobilebg from "../assets/images/mobileBg.svg";
import typeface from "../assets/images/typefaceSVG.svg";
import boat from "../assets/images/boat.svg";

export default function Landing() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* ===== ANIMATIONS ===== */

  // Boat movement (safe everywhere)
  const boatX = useTransform(scrollYProgress, [0, 1], ["0vw", "-22vw"]);

  // Desktop-only typeface scale
  const typeScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        overflow-x-hidden
        bg-[#083c36]
      "
    >
      {/* ================= LAYER 1: BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* ===== DESKTOP BG ===== */}
        <img
          src={bg}
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* ===== MOBILE BG ===== */}
        <img
          src={mobilebg}
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* ===== DESKTOP TYPEFACE (ANIMATED) ===== */}
        <motion.img
          src={typeface}
          style={{ scale: typeScale }}
          className="
            hidden md:block
            absolute
            top-[18%]
            left-1/2
            -translate-x-1/2
            w-[clamp(280px,60vw,560px)]
            origin-center
            pointer-events-none
          "
          alt=""
        />

        {/* ===== MOBILE TYPEFACE (STATIC) ===== */}
        <img
          src={typeface}
          className="
            block md:hidden
            absolute
            top-[16%]
            left-1/2
            -translate-x-1/2
            w-[72vw]
            max-w-[360px]
            pointer-events-none
          "
          alt=""
          loading="lazy"
          decoding="async"
        />

        {/* ===== DESKTOP DATE (ANIMATED) ===== */}
        <motion.p
          style={{ scale: typeScale }}
          className="
            hidden md:block
            absolute
            top-[45%]
            left-1/2
            -translate-x-1/2
            text-center
            font-extrabold
            tracking-widest
            uppercase
            text-teal-200
            text-[clamp(14px,2.2vw,26px)]
            drop-shadow-[0_0_16px_rgba(45,212,191,0.6)]
            pointer-events-none
          "
        >
          23<sup>rd</sup> – 25<sup>th</sup> January, 2026
        </motion.p>

        {/* ===== MOBILE DATE (STATIC) ===== */}
        <p
          className="
            block md:hidden
            absolute
            top-[28%]
            left-1/2
            -translate-x-1/2
            text-center
            font-bold
            tracking-widest
            uppercase
            text-teal-100
            text-[clamp(12px,3.5vw,18px)]
            drop-shadow-[0_0_12px_rgba(45,212,191,0.45)]
            pointer-events-none
          "
        >
          23<sup>rd</sup> – 25<sup>th</sup> January, 2026
        </p>
      </div>

      {/* ================= LAYER 2: BOAT ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={boat}
          style={{ x: boatX }}
          className="
            absolute
            bottom-[18%]
            md:bottom-[15%]
            left-[50%]
            w-[60%]
            md:w-[35%]
            z-10
          "
          alt=""
        />
      </div>

      {/* ================= REGISTER BUTTON ================= */}
      <div
        className="
          absolute
          bottom-[8%]
          md:bottom-[12%]
          left-1/2
          -translate-x-1/2
          z-20
        "
      >
        <button
          className="
            px-9 py-3
            rounded-xl
            font-bold
            tracking-wide
            text-white
            bg-gradient-to-b
            from-[#3bd2c1]
            to-[#1f8f82]
            shadow-[0_10px_26px_rgba(45,212,191,0.45)]
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Register
        </button>
      </div>
    </section>
  );
}
