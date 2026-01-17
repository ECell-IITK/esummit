"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import backg1 from "../assets/images/backg2.jpg";
import notion from "../assets/images/NotionLogo.png";
import microsoft from "../assets/images/microsoftLogo.png";
import traderSloop from "../assets/images/traderSloop.png";
import speaker1 from "../assets/images/priyankaKalra.jpg";
import speaker2 from "../assets/images/ChetnaDas.jpg";
import speaker3 from "../assets/images/deepakW.jpg";

const workshops = [
  {
    id: 0,
    logo: notion,
    title: "Mastering Personal Productivity with Notion",
    description:
      "Build a structured productivity system using Notion. Learn system thinking to manage academics, internships, and startups.",
    speaker: {
      name: "Priyanka Kalra",
      role: "People Partner",
      image: speaker1,
    },
  },
  {
    id: 1,
    logo: microsoft,
    title: "AI for Founders",
    description:
      "Understand how founders can leverage AI tools to automate workflows, validate ideas faster, and scale efficiently.",
    speaker: {
      name: "Chetna Das",
      role: "Product Manager",
      image: speaker2,
    },
  },
  {
    id: 2,
    logo: traderSloop,
    title: "Startup Finance 101",
    description:
      "Learn fundraising basics, financial modeling, and how startups manage cash flow in early stages.",
    speaker: {
      name: "Deepak Wadhwa",
      role: "Finance Content Creator",
      image: speaker3,
    },
  },
];

export default function Workshop() {
  const [active, setActive] = useState(2);

  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "center center"],
  });

  const leftDotX = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const rightDotX = useTransform(scrollYProgress, [0, 1], [0, 380]);

  const next = () => setActive((prev) => (prev + 1) % workshops.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? workshops.length - 1 : prev - 1));

  /* Auto switch every 3 seconds */
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="workshops" className="relative w-full py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${backg1})` }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

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
              Workshops
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

        {/* Cards */}
        <div className="relative h-[560px] flex items-center justify-center">
          {workshops.map((item, index) => {
            let offset = index - active;
            if (offset > 1) offset -= workshops.length;
            if (offset < -1) offset += workshops.length;

            const isCenter = offset === 0;

            return (
              <div
                key={item.id}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(${offset * 420}px) scale(${
                    isCenter ? 1.12 : 0.9
                  })`,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 30 : 20,
                }}
              >
                <div
                  className={`relative w-[360px] md:w-[380px] h-[560px] rounded-3xl overflow-hidden
                  bg-gradient-to-br from-[#0f1c1b] to-[#0b0f0f]
                  border border-white/10 transition-all duration-700 ${
                    isCenter
                      ? "shadow-[0_45px_110px_rgba(36,190,176,0.35)]"
                      : "shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  <div className="relative z-10 px-8 py-12 flex flex-col h-full">
                    {/* Speaker Image */}
                    <img
                      src={item.speaker.image}
                      alt={item.speaker.name}
                      className={`mx-auto rounded-full object-cover border-2 border-[#24BEB0]/80 shadow-xl transition-all duration-700
                        ${isCenter ? "w-62 h-62 -mt-6" : "w-48 h-48"}`}
                    />

                    {/* Speaker Name + Logo */}
                    <div className="mt-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={item.logo}
                          alt="Company Logo"
                          className={`h-8 w-8 object-contain transition-all ${
                            isCenter ? "opacity-100" : "opacity-60"
                          }`}
                        />
                        <p className="text-white text-xl font-semibold">
                          {item.speaker.name}
                        </p>
                      </div>

                      {/* Animated underline */}
                      <span
                        className={`block mx-auto mt-2 h-[3px] rounded-full bg-[#24BEB0] transition-all duration-700
                        ${isCenter ? "w-20 opacity-100" : "w-0 opacity-0"}`}
                      />

                      <p className="text-sm text-white/60 mt-2">
                        {item.speaker.role}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="my-4.5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Workshop Details */}
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/80 leading-relaxed text-justify px-2">
                      {item.description}
                    </p>

                    <div className="flex-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-center gap-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white/20 text-white text-2xl hover:bg-white/30 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-white/20 text-white text-2xl hover:bg-white/30 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
