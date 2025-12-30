import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";

import CursorSparkle from "./components/CursorSparkle";
import DotCursor from "./components/DotCursor";

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(hasHover && hasFinePointer);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Cursor Effects — Desktop ONLY */}
      {isDesktop && <DotCursor />}
      {isDesktop && <CursorSparkle />}

      {/* Content */}
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
