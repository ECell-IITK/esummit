"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import comp_UpStart from "../assets/images/upstartCampus.png";
import Decrypt from "../assets/images/DECRYPT.png";
import SYS from "../assets/images/SellYourSoul.png";
import model from "../assets/images/modelUnited.png";
import angel from "../assets/images/beAnAngel.png";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import bg5 from "../assets/images/bg5.jpg";
import bg6 from "../assets/images/bg6.jpg";
import bg7 from "../assets/images/bg7.jpg";
import backg1 from "../assets/images/backg.jpg";

const competitions = [
  {
    title: "DECRYPT",
    desc: "Ignite your entrepreneurial spirit with Decrypt, the ultimate case study competition. Dive into real-world challenges, make tough decisions, and embark on an exhilarating journey of problem-solving!",
    image: Decrypt,
    link: "https://unstop.com/competitions/decrypt-iit-kanpur-1609760",
    bg: bg1,
  },
  {
    title: "BE AN ANGEL",
    desc: "Experience the investor's perspective in Be an Angel : Shark Tank Edition. Role-play as an Angel Investor with $5 million to invest. Assess startups, pitch investment strategies, and face VC judges. Understand both sides of the table in this nerve-wracking pitch competition.",
    image: angel,
    link: "https://unstop.com/competitions/be-an-angel-iit-kanpur-1609387",
    bg: bg4,
  },
  {
    title: "SELL YOUR SOLE",
    desc: "Prepare to unleash your marketing genius in the Sell Your Sole competition! Step into the shoes of a CMO and craft a game-changing marketing campaign for an existing brand. It's your chance to redefine success!",
    image: SYS,
    link: "https://unstop.com/competitions/sell-your-sole-iit-kanpur-1609421",
    bg: bg5,
  },
  {
    title: "UPSTART CAMPUS",
    desc: "The classic pitching competition that showcases one's ability to ideate and pitch in front of judges from the across entrepreneurship world. Get the experience of being in the shoes of real life entrepreneur and learn what 'The Art of the Pitch' is all about.",
    image: comp_UpStart,
    link: "https://unstop.com/competitions/upstart-campus-iit-kanpur-1609728",
    bg: bg6,
  },
  {
    title: "MODEL UNITED CORPORATION",
    desc: "Unlock the thrill of corporate leadership! Join Model United Corporations and immerse yourself in the world of CEOs, CMOs, and CFOs. Conquer high-pressure decision-making, strategic challenges, and teamwork. Sharpen your skills, seize the spotlight, and prove you've got what it takes to lead in the boardroom. Join the competition, transform into a corporate titan!",
    image: model,
    link: "https://unstop.com/competitions/model-united-corporation-iit-kanpur-1609475",
    bg: bg7,
  },
];

export default function Competitions() {
  return (
    <section
      id="competitions"
      className="relative  text-white overflow-x-hidden"
    >
      <div
        className="
    absolute top-0 left-0 w-full h-40
    pointer-events-none
    z-[-5]
    bg-gradient-to-b
    from-[#020406]
    via-[#020406]/60
    to-transparent
  "
      />

      {/* ================= GRADIENT BACKGROUND ================= */}
      <div
        className="
    absolute inset-0 -z-30
    bg-[radial-gradient(120%_120%_at_50%_0%,#0e2b2a_0%,#05090c_45%,#020406_100%)]
  "
      />

      {/* ================= SECTION HEADING ================= */}
      <div className="relative py-16 md:py-10 overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          {/* LEFT LINE + DOT */}
          <div className="flex items-center">
            <motion.div
              className="h-[2px] bg-gradient-to-l from-[#6fe9dc] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "34vw" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <motion.div
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
        text-3xl sm:text-4xl md:text-5xl
        font-black uppercase tracking-widest
        font-[Archivo_Black]
        bg-gradient-to-r from-[#24BEB0] via-[#6fe9dc] to-white
        bg-clip-text text-transparent
      "
          >
            COMPETITIONS
          </h2>

          {/* RIGHT DOT + LINE */}
          <div className="flex items-center">
            <motion.div
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
              whileInView={{ width: "34vw" }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      {competitions.map((comp, index) => (
        <CompetitionSection
          key={index}
          comp={comp}
          mirrored={index % 2 !== 0}
          index={index}
        />
      ))}
    </section>
  );
}

/* ================= INDIVIDUAL SECTION ================= */

function CompetitionSection({ comp, mirrored, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* --- existing animations --- */
  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    mirrored ? ["10%", "0%"] : ["-10%", "0%"]
  );

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  /* ================= NEW: BACKGROUND MOTION ================= */
  const bgX = useTransform(
    scrollYProgress,
    [0, 1],
    mirrored ? ["-20%", "20%"] : ["20%", "-20%"]
  );

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.25, 0]);

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-[65vh] md:min-h-[60vh]
        flex items-center
        overflow-hidden
      "
    >
      {/* ================= MOVING GRADIENT BACKGROUND ================= */}
      <motion.div
        style={{ x: bgX }}
        className="
    absolute inset-0
    z-0
    pointer-events-none
    overflow-hidden
  "
      >
        <div
          className={`
      absolute top-0 h-full w-[140%]
    ${mirrored ? "right-[-20%]" : "left-[-20%]"}
    bg-gradient-to-r
    ${index % 2 === 0
              ? "from-transparent via-[#0F4F48]/45 to-transparent" // darker grounded teal
              : "from-transparent via-[#6FF2E3]/55 to-transparent" // brighter glowing teal
            }
  `}
        />

        {/* <div
          className={`
    absolute inset-0
    bg-gradient-to-br
    ${
      index % 2 === 0
        ? "from-[#0E3833]/12 via-transparent to-transparent" // deep base glow
        : "from-[#85DFD4]/10 via-transparent to-transparent" // soft highlight glow
    }
  `}
        /> */}
      </motion.div>

      {/* ================= ACTUAL CONTENT ================= */}
      <div
        className={`
          relative z-10
          w-full flex flex-col md:flex-row
          ${mirrored ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* ===== LEFT VISUAL ===== */}
        <div
          className="
            relative
            w-full md:w-1/2
            flex flex-col justify-center
            px-6 sm:px-10 md:px-24 lg:px-30
            py-12 md:py-0
          "
        >
          <motion.div
            style={{ scale: imageScale }}
            className="
              relative
              mt-0
              rounded-2xl overflow-hidden
              mx-auto md:mx-0
              w-full
              mw-full
              max-w-[520px] md:max-w-[620px] lg:max-w-[720px]
              h-[24vh] sm:h-[28vh] md:h-[45vh]
            "
          >
            <img
              src={comp.bg}
              className="absolute inset-0 w-full h-full object-cover opacity-75 "
              alt=""
              loading="lazy"
              decoding="async"
            />

            <img
              src={comp.image}
              alt={comp.title}
              className="
                relative z-10
                w-full h-full
                object-contain
                p-12 sm:p-14 md:p-15
              "
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div
          className="
            w-full md:w-1/2
            flex items-center
            px-6 sm:px-10 md:px-16 lg:px-24
            pb-16 md:pb-0
          "
        >
          <motion.div
            style={{ x: titleX }}
            className="max-w-md mx-auto md:mx-0 text-center md:text-left"
          >
            <h3
              className="
                text-xl sm:text-2xl md:text-3xl
                font-black uppercase
                tracking-wide
                mb-1 sm:mb-2
                bg-gradient-to-r from-[#24BEB0] via-[#6fe9dc] to-white
                bg-clip-text text-transparent
              "
            >
              {comp.title}
            </h3>

            <p className="text-white/100 text-sm sm:text-base md:text-lg leading-relaxed text-justify ">
              {comp.desc}
            </p>

            <a
              href={comp.link}
              target="_blank"
              className="
                inline-block mt-8
                px-10 py-3
                rounded-full
                border border-[#6fe9dc]
                text-[#6fe9dc]
                hover:bg-[#6fe9dc]/15
                transition
              "
            >
              Register ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
