"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import backg1 from "../assets/images/backg.jpg";

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [play, setPlay] = useState(false);

  /* ===== Heading dot motion ===== */
  const { scrollYProgress: headingScroll } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });

  const leftDotX = useTransform(headingScroll, [0, 1], ["0%", "60%"]);
  const rightDotX = useTransform(headingScroll, [0, 1], ["0%", "-60%"]);

  /* ===== Section text motion ===== */
  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const headingX = useTransform(sectionScroll, [0, 1], ["0%", "-9%"]);

  const paraX = useTransform(sectionScroll, [0, 1], ["0%", "0%"]);

  const headingXVar = headingX;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative z-10
        pt-16 pb-6
        px-6 md:px-12 lg:px-20
        overflow-hidden
        bg-black
      "
    >
      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 z-[-2] bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backg1})` }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#031e1b]/80 to-[#031e1b]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60 z-[-1]" />

      {/* ================= ABOUT US HEADING ================= */}
      <div ref={headingRef} className="relative mb-14 overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          {/* LEFT LINE + DOT */}
          <div className="flex items-center">
            <motion.div
              className="h-[2px] bg-gradient-to-l from-[#6fe9dc] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "32vw" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <motion.div
              style={{ x: leftDotX }}
              className="w-2.5 h-2.5 rounded-full bg-[#6fe9dc]"
              animate={{
                boxShadow: [
                  "0 0 6px rgba(111,233,220,0.5)",
                  "0 0 14px rgba(111,233,220,0.9)",
                  "0 0 6px rgba(111,233,220,0.5)",
                ],
              }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>

          {/* TEXT */}
          <h2
            className="
              text-center
              text-3xl md:text-5xl
              font-black uppercase tracking-widest
              font-[Archivo_Black]
              bg-gradient-to-r from-[#24BEB0] via-[#6fe9dc] to-white
              bg-clip-text text-transparent
            "
          >
            ABOUT&nbsp;US
          </h2>

          {/* RIGHT DOT + LINE */}
          <div className="flex items-center">
            <motion.div
              style={{ x: rightDotX }}
              className="w-2.5 h-2.5 rounded-full bg-[#6fe9dc]"
              animate={{
                boxShadow: [
                  "0 0 6px rgba(111,233,220,0.5)",
                  "0 0 14px rgba(111,233,220,0.9)",
                  "0 0 6px rgba(111,233,220,0.5)",
                ],
              }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />

            <motion.div
              className="h-[2px] bg-gradient-to-r from-[#6fe9dc] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "32vw" }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      {/* ================= CONTENT ROW ================= */}
      <div className="relative mb-5">
        <div className="relative grid md:grid-cols-12 items-center">
          {/* VIDEO */}
          <div className="relative md:col-span-9 md:col-start-4">
            <div className="relative h-[240px] sm:h-[380px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_70px_rgba(36,190,176,0.45)]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/gO28efPF5ao?rel=0"
                title="E-Summit Aftermovie"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>

          {/* TEXT */}
          <motion.div
            style={{ "--tw-translate-x": headingXVar }}
            className="
    relative
    md:absolute
    md:left-0 md:top-1/2 md:-translate-y-1/2
    md:col-span-6
    z-20
    max-w-xl
    mt-8 md:mt-0
    mx-auto md:mx-0
    text-center md:text-left
    md:[transform:translateX(var(--tw-translate-x))]
  "
          >
            <h2 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4.5rem] leading-[0.95] font-black uppercase font-[Archivo_Black] mb-4">
              WHAT IS <br />
              <span className="text-teal-300">E-SUMMIT?</span>
            </h2>

            <motion.p
              style={{ "--tw-translate-x": paraX }}
              className="
    md:[transform:translateX(var(--tw-translate-x))]
    text-sm sm:text-base text-white/90
    leading-relaxed
    p-4 rounded-xl
    mx-auto md:mx-0
    w-full md:w-[30vw]
    h-auto md:h-[36vh]
    text-justify
  "
            >
              E-summit is the flagship event of Entrepreneurship-Cell, annually
              convening academia, venture capitalists, and forward-thinking
              entrepreneurs. It serves as a platform to showcase entrepreneurial
              talent through diverse competitions, including business ventures,
              product design, and social entrepreneurship ideas.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
