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
import logo from "../assets/images/typeface.png";

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
      role: "Professor & Interviewer",
      img: vj, // replace with actual image
    },
    {
      name: "Tharun Naik",
      role: "Entrepreneur & Creator",
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
        className="
                     absolute inset-0
                     z-[-2]
                     bg-cover bg-center
                     scale-105
                 "
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
      <div ref={headingRef} className="relative mb-15">
        {/* ================= DESKTOP ONLY ================= */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              {/* LEFT SIDE */}
              <div className="flex items-center flex-1 overflow-hidden">
                <motion.div
                  className="h-[2px] flex-1 bg-gradient-to-l from-[#6fe9dc] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transformOrigin="right"
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
                <motion.div
                  style={{ x: leftDotX }}
                  className="w-2.5 h-2.5 rounded-full bg-[#6fe9dc] flex-shrink-0"
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
            text-4xl md:text-5xl
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

              {/* RIGHT SIDE */}
              <div className="flex items-center flex-1 overflow-hidden">
                <motion.div
                  style={{ x: rightDotX }}
                  className="w-2.5 h-2.5 rounded-full bg-[#6fe9dc] flex-shrink-0"
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
                  className="h-[2px] flex-1 bg-gradient-to-r from-[#6fe9dc] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transformOrigin="left"
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ONLY ================= */}
<div className="block md:hidden">
  <div className="px-4">
    <div className="flex items-center justify-center gap-3">
      
      {/* LEFT LINE + DOT */}
      <div className="flex items-center flex-1 overflow-hidden">
        <motion.div
          className="h-[2px] flex-1 bg-gradient-to-l from-[#6fe9dc] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transformOrigin="right"
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-[#6fe9dc] flex-shrink-0"
          animate={{
            boxShadow: [
              "0 0 5px rgba(111,233,220,0.5)",
              "0 0 10px rgba(111,233,220,0.9)",
              "0 0 5px rgba(111,233,220,0.5)",
            ],
          }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </div>

      {/* TEXT */}
      <h1
        className="
          shrink-0
          text-2xl sm:text-3xl
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
          whitespace-nowrap
        "
      >
        PAST SPEAKERS
      </h1>

      {/* RIGHT DOT + LINE */}
      <div className="flex items-center flex-1 overflow-hidden">
        <motion.div
          className="w-2 h-2 rounded-full bg-[#6fe9dc] flex-shrink-0"
          animate={{
            boxShadow: [
              "0 0 5px rgba(111,233,220,0.5)",
              "0 0 10px rgba(111,233,220,0.9)",
              "0 0 5px rgba(111,233,220,0.5)",
            ],
          }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <motion.div
          className="h-[2px] flex-1 bg-gradient-to-r from-[#6fe9dc] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transformOrigin="left"
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>

    </div>
  </div>
</div>

      </div>

      {/* ================= MARQUEE CONTAINER ================= */}
      <div className="relative space-y-5 ">
        {/* ROW 1 → LEFT */}
        <div>
          {/* ROW 1 → FOUNDERS (LEFT) */}
          {/* ================= MARQUEE CONTAINER ================= */}
          <div className="relative space-y-5">
            {/* ROW 1 → FOUNDERS (LEFT) */}
            <InfiniteRow direction="left" duration={42}>
              {[...founders, ...founders].map((speaker, i) => (
                <SpeakerCard key={`founder-${i}`} speaker={speaker} />
              ))}
            </InfiniteRow>

            {/* ROW 2 → CREATORS (RIGHT) */}
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
        w-[220px] h-[280px]
        rounded-2xl
        bg-gradient-to-b from-[#1b1f1f] to-[#0e1111]
        border border-white/100
        overflow-visible
        flex flex-col items-center justify-end
        flex-shrink-0
      "
    >
      {/* ================= LOGO ================= */}
      {/* <div className="absolute top-3 z-20">
        <img src={logo} alt="E-Summit Logo" className="h-8 opacity-80 mt-2" />
      </div> */}

      {/* ================= SOFT GLOW ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(133,223,212,0.25),transparent_65%)]" />

      {/* ================= SPEAKER IMAGE ================= */}
      <div className="absolute top-6 w-[220px] h-[202px] flex justify-center">

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
