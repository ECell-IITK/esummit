"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import backg1 from "../assets/images/backg.jpg";
import aegisVideo from "../assets/videos/themeR.mp4";

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

  // const headingX = useTransform(sectionScroll, [0, 1], ["-8%", "0%"]);
  // const paraX = useTransform(sectionScroll, [0, 1], ["-6%", "0%"]);

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

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#031e1b]/80 to-[#031e1b]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/60 z-[-1]" />

      {/* ================= ABOUT US HEADING ================= */}
      <div ref={headingRef} className="relative mb-15 overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center">
            <motion.div
              className="h-[2px] bg-gradient-to-l from-[#6fe9dc] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "32vw" }}
              transition={{ duration: 1.1 }}
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

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest font-[Archivo_Black] bg-gradient-to-r from-[#24BEB0] via-[#6fe9dc] to-white bg-clip-text text-transparent">
            ABOUT&nbsp;US
          </h2>

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
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      {/* ================= WHAT IS E-SUMMIT ================= */}
      <div className="relative mb-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* VIDEO */}
          <div className="md:col-span-7">
            <div className="h-[240px] sm:h-[380px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_70px_rgba(36,190,176,0.45)]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/gO28efPF5ao?rel=0"
                allowFullScreen
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="md:col-span-5 text-center md:text-center">
            <h2 className="text-[2.0rem] sm:text-[2.3rem] lg:text-[2.4rem] leading-[0.95] font-black uppercase font-[Archivo_Black] mb-5">
              WHAT IS
              <span className="text-teal-300"> E-SUMMIT?</span>
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed p-4 rounded-xl text-justify">
              E-Summit is the flagship event of Entrepreneurship-Cell, annually
              convening academia, venture capitalists, and forward-thinking
              entrepreneurs. It serves as a platform to showcase entrepreneurial
              talent through diverse competitions, including business ventures,
              product design, and social entrepreneurship ideas. Just join us to
              witness innovation and creativity in action, where
              entrepreneurship finds its home.
            </p>
          </div>
        </div>
      </div>

      {/* ================= AEGIS OF ASCENDENCE ================= */}
      <div className="relative mb-5">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* TEXT */}
          <div className="md:col-span-5 text-center md:text-center">
            <h2 className="text-[2.2rem] sm:text-[2rem] lg:text-[2.3rem] leading-[1] font-black uppercase font-[Archivo_Black] mb-6">
              E-Summit'25 :
              <span className="text-teal-300"> Aegis of Ascendence</span>
            </h2>

            <p
              className="text-sm sm:text-base text-white/90 leading-relaxed
        p-2 rounded-xl text-justify md:ml-auto"
            >
              Unveiling the shield that guides our ambitions, the Aegis of
              Ascendence illuminates every challenge as a step forward and every
              effort as a silent testament to our vision. In this journey of
              rise and realization, courage awakens a relentless force that
              nurtures innovation, sparks creativity, and elevates every dream
              beyond boundaries.
            </p>
          </div>
          {/* VIDEO */}
          <div className="md:col-span-7">
            <div
              className="relative rounded-[28px] p-[1.5px]
        bg-gradient-to-br from-[#24BEB0]/60 via-[#1a3b3a]/40 to-[#0b1416]/80
        shadow-[0_0_80px_rgba(36,190,176,0.45)]"
            >
              <div
                className="relative h-[220px] sm:h-[360px] lg:h-[500px]
          rounded-[26px] overflow-hidden bg-black/60 backdrop-blur-xl
          border border-white/10 transition-all duration-500
          hover:shadow-[0_0_120px_rgba(36,190,176,0.6)]"
              >
                <video
                  src={aegisVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-[1.02]"
                />

                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.75)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
