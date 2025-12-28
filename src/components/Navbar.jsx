import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/LogoComplete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("landing");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sections = [
      "landing",
      "about",
      "competitions",
      "workshops",
      "speakers",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px", // 👈 KEY FIX
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.3) {
        setActiveSection("landing");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false); // close mobile menu

    if (location.pathname === "/") {
      // Already on home → smooth scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // On register or other page → go home with hash
      navigate(`/#${sectionId}`);
    }
  };
  const handleLogoClick = () => {
    setIsOpen(false); // close mobile menu if open

    if (location.pathname === "/") {
      // Already on home → scroll to top / landing
      const el = document.getElementById("landing");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // On another page → go home
      navigate("/");
    }
  };

  return (
    <nav
      className={`
    fixed top-4 left-1/2 -translate-x-1/2
    z-50
    w-full max-w-7xl
    transition-all duration-500 ease-out
    will-change-transform

    ${
      scrolled
        ? `
          bg-white/10 backdrop-blur-xl
          shadow-lg
          rounded-xl
          scale-[0.95]
        `
        : `
          bg-transparent
          scale-100
        `
    }
  `}
    >
      {/* Navbar content */}
      <div
        className={`
          flex justify-between items-center
          transition-all duration-500
          ${scrolled ? "px-8 py-3" : "px-8 py-3"}
        `}
      >
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src={Logo}
            alt="E-Summit Logo"
            className="h-10 w-39.8 object-cover"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-7 absolute left-1/2 transform -translate-x-1/2">
          {[
            { name: "Home", href: "#landing", id: "landing" },
            { name: "About Us", href: "#about", id: "about" },
            { name: "Competitions", href: "#competitions", id: "competitions" },
            { name: "Workshops", href: "#workshops", id: "workshops" },
            // { name: "Gallery", href: "#gallery" },
            { name: "Past Speakers", href: "#speakers", id: "speakers" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className={`
    relative
    text-[15px] font-semibold tracking-wide transition-all duration-300
    ${
      activeSection === item.id
        ? "text-[#4CD1C0] after:scale-x-100 drop-shadow-[0_0_8px_rgba(76,209,192,0.6)]"
        : "text-white hover:text-[#4CD1C0] after:scale-x-0"
    }
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-full
    after:h-[2px]
    after:bg-gradient-to-r after:from-[#24BEB0] after:to-[#6fe9dc]
    after:origin-left
    after:transition-transform after:duration-300
  `}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <Link to="/register">
            <button
              className="
                px-5 py-1.5
                rounded-md
                font-semibold text-sm text-white
                bg-gradient-to-b from-[#3bd2c1] to-[#1f8f82]
                shadow-[0_4px_10px_rgba(0,0,0,0.4)]
                hover:from-[#4fe6d5] hover:to-[#2ba99a]
                transition-all duration-300
                hover:scale-[1.08] active:scale-[0.97]
              "
            >
              Register
            </button>
          </Link>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 rounded-b-xl">
          <div className="flex flex-col space-y-3 px-6 py-4">
            {[
              { name: "Home", href: "#landing" },
              { name: "About", href: "#about" },
              { name: "Competitions", href: "#competitions" },
              { name: "Workshops", href: "#workshops" },
              { name: "Past Speakers", href: "#speakers" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href.replace("#", ""))}
                className="text-left text-white font-medium hover:text-[#4CD1C0] transition"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
