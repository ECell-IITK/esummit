import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import upstart from "../assets/images/UpstartPanel.JPG";
import expo from "../assets/images/expoSummit.jpg";
import dinner from "../assets/images/netDinnerSummit.jpeg";
import yec from "../assets/images/yecSummit.jpeg";
import cacp from "../assets/images/CaCp.jpeg";
import sip from "../assets/images/sip_summit.jpg";
import WhatWeDoCard from "../components/WhatWeDoCard";
import backg1 from "../assets/images/backg2.jpg";

export default function WhatWeDo() {
  /* ===== Scroll-based dot motion ===== */
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "center center"],
  });

  const leftDotX = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const rightDotX = useTransform(scrollYProgress, [0, 1], [0, 380]);
  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardItem = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const items = [
    {
      title: "UpStart",
      img: upstart,
      desc: "UpStart being the flagship pitching event of E-Cell has always catered to the budding startups of the nation. With 500+ registrations, UpStart has managed to sow the seeds of entrepreneurship across the country.",
      link: "https://www.ecelliitk.org/upstart/",
    },
    {
      title: "Startup Expo",
      img: expo,
      desc: "Startup expo offers a platform for startups to showcase their unique ideas and the opportunity to orchestrate product Launches, network with investors, and gain exposure to a wider audience.",
      link: "https://www.ecelliitk.org/expo/",
    },
    {
      title: "Networking Dinner",
      img: dinner,
      desc: "E-Cell IIT Kanpur holds a networking dinner with the aim of not just connecting people but connecting people with ideas and people with opportunities.",
      link: "https://www.ecelliitk.org/upstart/",
    },
    {
      title: "YEC",
      img: yec,
      desc: "Youth Entrepreneurship Challenge offers a platform for young innovators to solve real-world problems, learn entrepreneurial fundamentals, refine ideas, build business plans, and present solutions confidently before experienced judges nationwide.",
      link: "https://www.ecelliitk.org/YEC/",
    },
    {
      title: "CA/CP",
      img: cacp,
      desc: "The Campus Ambassador Program offers students a platform to represent E-Cell IIT Kanpur on their campuses, collaborate with a national team, enhance leadership and communication skills, and foster entrepreneurial growth within their colleges.",
      link: "https://www.ecelliitk.org/ca/",
    },
    {
      title: "SIP",
      img: sip,
      desc: "The Startup Internship Program connects IIT Kanpur students with innovative startups, offering hands-on industry exposure while providing startups with enthusiastic, adaptable, and creative talent eager to learn and excel in real-world environments.",
      link: "https://www.ecelliitk.org/sip/",
    },
  ];

  return (
    <section
      className="
         relative
         z-0
         w-full
         min-h-screen
         py-10 md:py-10
         px-4 md:px-10 lg:px-10
         text-white
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

          {/* HEADING TEXT */}
          <h2
            className="
              text-center
              text-4xl md:text-5xl lg:text-5xl
              font-black
              font-[Archivo_Black]
              uppercase
              tracking-[0.04em]
              bg-gradient-to-r
              from-[#24BEB0]
              via-[#6fe9dc]
              to-white
              bg-clip-text
              text-transparent
            "
          >
            WHAT&nbsp;WE&nbsp;DO
          </h2>

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

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.12, once: true }}
        className="
       grid 
       grid-cols-1 
       sm:grid-cols-2 
       lg:grid-cols-3 
       gap-6 
       md:gap-10
    "
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={cardItem}>
            <WhatWeDoCard
              title={item.title}
              img={item.img}
              desc={item.desc}
              website={item.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
