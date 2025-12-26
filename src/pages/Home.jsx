import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Landing from "../sections/Landing"; 
import InfiniteMarquee from "../components/InfiniteMarquee";
import SocialSidebar from "../components/SocialSidebar";

const About = lazy(() => import("../sections/About"));
const WhatWeDo = lazy(() => import("../sections/WhatWeDo"));
const Competitions = lazy(() => import("../sections/Competitions"));
const Speakers = lazy(() => import("../sections/Speakers"));

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="text-white">
      <SocialSidebar />

      {/* 🚀 Load immediately (LCP) */}
      <Landing /> {/* id="landing" */}

      {/* 💤 Lazy-loaded sections */}
      <Suspense fallback={<div className="h-[60vh]" />}>

        <InfiniteMarquee />
        <About />         {/* id="about" */}
        {/* <InfiniteMarquee /> */}
        <WhatWeDo />      {/* id="workshops" */}
        <Competitions />  {/* id="competitions" */}
        <Speakers />      {/* id="speakers" */}
      </Suspense>
    </main>
  );
}
