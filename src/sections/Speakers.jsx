"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aman from "../assets/images/aman-gupta_sumit.png";
import mukesh from "../assets/images/mukeshBansalSmmit.png";
import tharun from "../assets/images/tharunSummit.png";
import rahul from "../assets/images/Rahul-Garg.png";
import ashneer from "../assets/images/AshneerGroverSummit.png";
import vj from "../assets/images/VjchauhanSummit.png";
import himesh from "../assets/images/HimeeshM.png";
import saurabh from "../assets/images/saurabh-dwivedi-1.png";
import sanjeev from "../assets/images/sanjeev-bikhchandantn.png";
import kunal from "../assets/images/kunalshah.png";
import ishan from "../assets/images/ishanSharma.png";
import sandeep from "../assets/images/SandeepJain.png";
import amit from "../assets/images/amitAgrawalsummit.png";
import backg1 from "../assets/images/backg2.jpg";

/* ================= MAIN SECTION ================= */

function InfiniteRow({ children, direction = "left", duration = 40 }) {
  return (
    <div className="relative w-full">
      <motion.div
        className="flex w-max gap-3 overflow-visible"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function PastSpeakers() {
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "center center"],
  });

  const leftDotX = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const rightDotX = useTransform(scrollYProgress, [0, 1], [0, 380]);

  // ================= FOUNDERS / PROFESSIONALS =================
  const founders = [
    { name: "Aman Gupta", role: "Founder, Boat", img: aman },
    { name: "Mukesh Bansal", role: "Founder, Myntra", img: mukesh },
    { name: "Ashneer Grover", role: "Founder, BharatPe", img: ashneer },
    { name: "Rahul Garg", role: "Founder, Moglix", img: rahul },
    {
      name: "Sanjeev Bikhchandani",
      role: "Co-Founder, Info Edge",
      img: sanjeev,
    },
    { name: "Kunal Shah", role: "Founder, Cred", img: kunal },
    { name: "Amit Agrawal", role: "Founder, NoBroker", img: amit },
  ];

  // ================= CONTENT CREATORS =================
  const creators = [
    {
      name: "Vijender Chauhan",
      role: "Interviewer",
      img: vj, 
    },
    {
      name: "Tharun Naik",
      role: "Creator",
      img: tharun,
    },
    {
      name: "Himesh Madaan",
      role: "Motivational Speaker",
      img: himesh,
    },
    {
      name: "Saurabh Dwivedi",
      role: "Journalist, Lallantop",
      img: saurabh,
    },
    {
      name: "Sandeep Jain",
      role: "Founder, GFG",
      img: sandeep,
    },
    {
      name: "Ishan Sharma",
      role: "Podcaster & Founder",
      img: ishan,
    },
  ];

  return (
    <section
      id="speakers"
      className="
        relative
        pt-16 pb-12
        overflow-hidden
      "
    >
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
            PAST SPEAKERS
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

      <div className="relative space-y-5 ">
        <div>
          <div className="relative space-y-5">
            <InfiniteRow direction="left" duration={42}>
              {[...founders, ...founders].map((speaker, i) => (
                <SpeakerCard key={`founder-${i}`} speaker={speaker} />
              ))}
            </InfiniteRow>

            <InfiniteRow direction="right" duration={48}>
              {[...creators, ...creators].map((speaker, i) => (
                <SpeakerCard key={`creator-${i}`} speaker={speaker} />
              ))}
            </InfiniteRow>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function SpeakerCard({ speaker }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -2,
        zIndex: 20,
        boxShadow: "0 0 70px rgba(133,223,212,0.45)",
      }}
      transition={{ type: "spring", stiffness: 180 }}
      className="
        relative
        w-[180px] h-[240px] sm:w-[200px] sm:h-[260px] md:w-[220px] md:h-[280px]
        rounded-2xl
        bg-gradient-to-b from-[#1b1f1f] to-[#0e1111]
        border border-white/100
        overflow-visible
        flex flex-col items-center justify-end
        flex-shrink-0
      "
    >
      {/* ================= SOFT GLOW ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(133,223,212,0.25),transparent_65%)]" />

      {/* ================= SPEAKER IMAGE ================= */}
      <div className="absolute top-6 w-[185px] h-[161px] md:w-[220px] md:h-[201px] flex justify-center">
        <img
          src={speaker.img}
          alt={speaker.name}
          className="
            max-w-full
            max-h-full
            object-contain
            drop-shadow-2xl
          "
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ================= DIVIDER ================= */}
      <div className=" h-px w-full bg-white/80" />

      {/* ================= TEXT ================= */}
      <div className="relative z-10 text-center mb-3">
        <h3 className="text-base font-semibold text-[#85dfd4]">
          {speaker.name}
        </h3>
        <p className="text-xs text-white/80 tracking-widest uppercase">
          {speaker.role}
        </p>
      </div>
    </motion.div>
  );
}
