import { useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import Landing from "../sections/Landing";
import InfiniteMarquee from "../components/InfiniteMarquee";
import SocialSidebar from "../components/SocialSidebar";
import IntroVideo from "../components/IntroVideo";

const About = lazy(() => import("../sections/About"));
const WhatWeDo = lazy(() => import("../sections/WhatWeDo"));
const Competitions = lazy(() => import("../sections/Competitions"));
const Speakers = lazy(() => import("../sections/Speakers"));
const Workshops = lazy(() => import("../sections/Workshop"));

export default function Home() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Delay intro until page is painted
    const id = requestIdleCallback(() => {
      setShowIntro(true);
    });
    return () => cancelIdleCallback(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }
    }
  }, [location, showIntro]);

  return (
    <>
      <main className="text-white">
        <SocialSidebar />

        <Landing />

        <Suspense fallback={<div className="h-[60vh]" />}>
          <InfiniteMarquee />
          <About />
          <WhatWeDo />
          <Competitions />
          <Workshops />
          <Speakers />
        </Suspense>
      </main>

      {showIntro && <IntroVideo onFinish={() => setShowIntro(false)} />}
    </>
  );
}
