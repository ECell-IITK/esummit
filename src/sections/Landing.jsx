"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/background4.svg";
import mobilebg from "../assets/images/mobileBg.svg";
import typeface from "../assets/images/typefaceSVG.svg";
import boat from "../assets/images/boat.svg";

export default function Landing() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const boatX = useTransform(scrollYProgress, [0, 1], ["0vw", "-45vw"]);
  const typeScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  /* ================= COUNTDOWN LOGIC ================= */
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const eventDate = new Date("2026-01-23T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden overflow-x-hidden bg-[#083c36]"
    >
      {/* ================= LAYER 1: BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src={bg}
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          alt=""
          loading="lazy"
        />

        <img
          src={mobilebg}
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          alt=""
          loading="lazy"
        />

        <motion.img
          src={typeface}
          style={{ scale: typeScale }}
          className="hidden md:block absolute top-[18%] left-1/2 -translate-x-1/2 w-[clamp(280px,60vw,600px)]"
          alt=""
        />

        <img
          src={typeface}
          className="block md:hidden absolute top-[18%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[400px]"
          alt=""
        />

        {/* ===== DATE ===== */}
        <motion.p
          style={{ scale: typeScale }}
          className="hidden md:block absolute top-[46%] left-1/2 -translate-x-1/2 text-center font-semibold tracking-widest text-teal-300 text-[clamp(14px,2.2vw,30px)] drop-shadow-[0_0_16px_rgba(45,212,191,0.6)]"
        >
          23rd – 25th January, 2026
        </motion.p>

        <p className="block md:hidden absolute top-[34%] left-1/2 -translate-x-1/2 text-center font-semibold tracking-widest text-teal-100 text-[clamp(12px,3.8vw,18px)] drop-shadow-[0_0_12px_rgba(45,212,191,0.45)]">
          23rd – 25th January, 2026
        </p>

      </div>

      {/* ================= LAYER 2: BOAT ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={boat}
          style={{ x: boatX }}
          className="absolute bottom-[18%] md:bottom-[15%] left-[50%] w-[60%] md:w-[35%] z-10"
          alt=""
        />
      </div>

      {/* ================= REGISTER BUTTON ================= */}
      <div className="absolute bottom-[8%] md:bottom-[12%] left-1/2 -translate-x-1/2 z-20">
        <Link to="/register">
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
        </Link>
      </div>
    </section>
  );
}
