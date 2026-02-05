import React from "react";
import sponsor1 from "../assets/images/odop.png";
import sponsor2 from "../assets/images/swayamPrabha.png";
import sponsor3 from "../assets/images/kotak.png";
import sponsor4 from "../assets/images/redBull.png";
import sponsor5 from "../assets/images/investUP.png";
import sponsor6 from "../assets/images/letsShave.png";
import sponsor7 from "../assets/images/technopark.png";
import sponsor8 from "../assets/images/warmee.png";
import sponsor9 from "../assets/images/NTPC.png";
import sponsor10 from "../assets/images/siic.png";
import sponsor11 from "../assets/images/startupbyDoc.png";
import sponsor12 from "../assets/images/bridgers.png";
import sponsor13 from "../assets/images/startupstorylogo.png";
import sponsor14 from "../assets/images/ruskle.png";
import sponsor15 from "../assets/images/upsida.png";
import sponsor16 from "../assets/images/tgh.png";
import sponsor17 from "../assets/images/habbits.png";
import sponsor18 from "../assets/images/TheIndianExpress.png";
import sponsor19 from "../assets/images/unstop.png";
import sponsor20 from "../assets/images/aiia.png";
import sponsor21 from "../assets/images/c3i.png";
import sponsor22 from "../assets/images/dainikJ.png";
import sponsor23 from "../assets/images/abhibus.png";
import sponsor24 from "../assets/images/startUpNews.png";
import sponsor25 from "../assets/images/apd.png";
import sponsor26 from "../assets/images/cmyuva.png";
import sponsor27 from "../assets/images/sbi.png";
import sponsor28 from "../assets/images/languify.png";

const poweredSponsors = [
  { tier: "Title", logo: sponsor1 },
  { tier: "Title", logo: sponsor26 },
];

const otherSponsors = [
  // --- POWERED BY ---
  { tier: "Powered By Sponsor Startup Expo", logo: sponsor15 }, // UPSIDA
  { tier: "Powered By Partner", logo: sponsor19 }, // Unstop

  // --- UPSTART ---
  { tier: "Upstart Title Sponsor", logo: sponsor27 }, // SBI

  // --- ASSOCIATE ---
  { tier: "Associate Sponsor", logo: sponsor9 }, // NTPC

  // --- SILVER ---
  { tier: "Silver Sponsor", logo: sponsor5 }, // Invest UP

  // --- SUSTAINABILITY ---
  { tier: "Sustainability Sponsor", logo: sponsor3 }, // KSS (Kotak image assumed)

  // --- EDUCATIONAL ---
  { tier: "Educational Partner", logo: sponsor2 }, // Swayam Prabha
  { tier: "Educational Partner", logo: sponsor18 }, // The Indian Express (NPTEL alt)

  // --- INCUBATION ---
  { tier: "Official Incubation Partner", logo: sponsor10 }, // SIIC

  // --- TECHNOLOGY ---
  { tier: "Technology Partner", logo: sponsor7 }, // Technopark
  { tier: "Cyber Security Partner", logo: sponsor21 }, // C3i

  // --- BEVERAGE ---
  { tier: "Beverage Partner", logo: sponsor4 }, // Red Bull

  // --- SMILE ---
  { tier: "Smile Partner", logo: sponsor17 }, // Habbits

  // --- CRUNCH ---
  { tier: "Crunch Partner", logo: sponsor14 }, // Ruskle

  // --- GROOMING ---
  { tier: "Grooming Partner", logo: sponsor6 }, // Lets Shave

  // --- TRAVEL ---
  { tier: "Travel Partner", logo: sponsor23 }, // AbhiBus

  // --- WARMTH ---
  { tier: "Warmth Partner", logo: sponsor8 }, // Warmee
];

const SponsorCard = ({ tier, logo }) => (
  <div className="group flex flex-col items-center">
    {/* White Slab */}
    <div
      className="
        w-[320px] h-[260px]
        bg-white
        rounded-2xl
        flex items-center justify-center
        transition-all duration-300
        group-hover:-translate-y-4
        group-hover:shadow-[0_0_60px_rgba(45,212,191,0.65)]
      "
    >
      <img
        src={logo}
        alt={tier}
        className="max-w-[75%] max-h-[70%] object-contain"
      />
    </div>

    {/* Tier Text */}
    <p
      className="
        mt-4
        min-h-[64px]                 
        flex items-center justify-center
        text-center
        px-3
        text-lg sm:text-xl md:text-2xl
        font-black uppercase
        tracking-wider
        leading-tight
        bg-gradient-to-r from-[#24BEB0] via-[#6fe9dc] to-white
        bg-clip-text text-transparent
        
    "
    >
      {tier}
    </p>
  </div>
);

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-black px-6 md:px-20 py-28">
      {/* Heading */}
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest font-[Archivo_Black] bg-gradient-to-r from-[#24BEB0] via-[#6fe9dc] to-white bg-clip-text text-transparent">
          Our&nbsp;Sponsors
        </h2>
        <div className="mt-8 flex justify-center">
          <span className="h-[3px] w-28 bg-gradient-to-r from-[#24BEB0] to-[#6fe9dc] rounded-full"></span>
        </div>
      </div>

      <div className="flex justify-center gap-24 mb-32 flex-wrap">
        {poweredSponsors.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 place-items-center">
        {otherSponsors.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
