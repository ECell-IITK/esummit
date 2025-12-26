import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import CursorSparkle from "./components/CursorSparkle";
import DotCursor from "./components/DotCursor";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";


const isDesktop = window.matchMedia("(hover: hover)").matches;

{isDesktop && <DotCursor />}
{isDesktop && <CursorSparkle />}


function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Effects */}
      
      <DotCursor />
      <CursorSparkle />

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
