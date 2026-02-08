"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import backg1 from "../assets/images/backg2.jpg";
import judge1 from "../assets/images/Keshav.jpg";
import judge2 from "../assets/images/Chetan.jpg";
import judge3 from "../assets/images/Sanjay.jpg";
import judge4 from "../assets/images/Ravi.jpg";
import judge5 from "../assets/images/Snehil.jpg";
import judge6 from "../assets/images/Anmol.jpg";
import judge7 from "../assets/images/Suraj.jpg";

/* ================= DATA ================= */

const cmyuvaJudges = [
  { name: "Keshav pareek", role: "Product Manager, NSRCEL", img: judge1 },
  { name: "Chetan Dalal", role: "Co-Founder at Weekday", img: judge2 },
  { name: "Sanjay", role: "Co-founder & COO @ Weekday", img: judge3 },
  { name: "Ravi challu", role: "Co-Founder and Managing Partner, WiseOwl Consulting LLP", img: judge4 },
];

const hackathonJudges = [
  { name: "Snehil Saluja", role: "Co-founder, Overlayy", img: judge5 },
  { name: "Anmol Chaman", role: "Co-Founder & CEO, Overlayy", img: judge6 },
  { name: "Suraj Mishra", role: "CTO, Overlayy", img: judge7 },
];

/* ================= MAIN SECTION ================= */

export default function Judges() {
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "center center"],
  });

  const leftDotX = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const rightDotX = useTransform(scrollYProgress, [0, 1], [0, 380]);


  return (
    <section id="judges" className="relative pt-24 pb-32 overflow-hidden ">
      <div
        className=" absolute inset-0 z-[-2] bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backg1})` }}
      />

      <div
        className="
          absolute top-0 left-0
          w-full h-40
          bg-gradient-to-t
          from-transparent
         via-[#031e1b]/80
         to-[#031e1b]
       "
      />

      {/* ================= SOFT OVERLAY ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
         from-black/10
         via-black/40
         to-black/60
         z-[-1]
        "
      />

      {/* ================= HEADING ================= */}
      <div ref={headingRef} className="relative mb-16 overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          {/* LEFT DOT + LINE */}
          <div className="hidden md:flex items-center">
            {/* Line */}
            <motion.div
              className="h-[2px] bg-gradient-to-l from-[#6fe9dc] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "40vw" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Moving Dot */}
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
          <h1
            className="
                shrink-0
                text-3xl md:text-5xl
                font-black
                font-[Archivo_Black]
                tracking-[0.04em]
                uppercase
                bg-gradient-to-r
               from-[#24BEB0]
               via-[#6fe9dc]
               to-white
                bg-clip-text
                text-transparent
                text-center
                whitespace-nowrap
                "
          >
            Judges
          </h1>

          {/* RIGHT DOT + LINE */}
          <div className="hidden md:flex items-center">
            {/* Moving Dot */}
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

            {/* Line */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-[#6fe9dc] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "40vw" }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      {/* ================= CM YUVA ================= */}
      <SectionTitle title="CMYUVA Innovation challenge" />

      <div className="mt-8 flex flex-wrap justify-center gap-12">
        {cmyuvaJudges.map((judge, i) => (
          <JudgeCard key={`cmyuva-${i}`} judge={judge} />
        ))}
      </div>

      {/* ================= HACKATHON ================= */}
      <div className="mt-16">
        <SectionTitle title="The $10M Sprint Hackathon" />

        <div className="mt-8 flex flex-wrap justify-center gap-25">
          {hackathonJudges.map((judge, i) => (
            <JudgeCard key={`hack-${i}`} judge={judge} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= SECTION TITLE ================= */

function SectionTitle({ title }) {
  return (
    <div className="flex justify-center px-4">
      <div className="px-6 py-2 rounded-full border border-[#6fe9dc]/40 bg-black/40 backdrop-blur-md">
        <h2 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.25em] text-[#85dfd4] text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}

/* ================= JUDGE CARD ================= */

function JudgeCard({ judge }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 0 40px rgba(133,223,212,0.35)",
      }}
      transition={{ type: "spring", stiffness: 140 }}
      className="
        relative
        w-[260px] h-[300px]
        rounded-3xl
        bg-gradient-to-b
        from-[#0f2e2a]
        via-[#0b2421]
        to-[#071917]
        overflow-hidden
        flex flex-col items-center
        px-6
        pt-8
      "
    >
      {/* ===== SOFT INNER GLOW ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(133,223,212,0.18),transparent_60%)]" />

      {/* ===== PROFILE IMAGE ===== */}
      <div
        className="
          relative
          w-40 h-40
          rounded-full
          flex items-center justify-center
          bg-gradient-to-br from-[#24BEB0] to-[#6fe9dc]
          p-[2px]
        "
      >
        <div className="w-full h-full rounded-full bg-[#081615] overflow-hidden">
          <img
            src={judge.img}
            alt={judge.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* ===== NAME ===== */}
      <h3
        className="
          mt-2
          text-lg
          font-bold
          text-[#85dfd4]
          text-center
        "
      >
        {judge.name}
      </h3>

      {/* ===== ROLE ===== */}
      <p
        className="
          mt-1
          text-xs
          uppercase
          tracking-widest
          text-white/70
          text-center
        "
      >
        {judge.role}
      </p>

      {/* ===== DIVIDER ===== */}
      {/* <div className="w-12 h-[1px] bg-[#6fe9dc]/60 my-6" /> */}

      {/* ===== OPTIONAL DESCRIPTION SLOT (future-proof) ===== */}
      {/* <p className="text-xs text-white/50 text-center leading-relaxed">
        Jury Member
      </p> */}
    </motion.div>
  );
}

