import logo from "../assets/images/LogoComplete.png";
import footerlogo from "../assets/images/footerLogo.svg";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="
        relative
        text-white
        pt-12 pb-8
        bg-gradient-to-b
        from-white/10
        via-white/5
        to-white/0
        backdrop-blur-md
        border border-white/20
        shadow-[0_0_40px_rgba(36,145,132,0.35)]
        bg-black
      "
    >
      {/* Glow Border */}
      <div
        className="absolute inset-0 pointer-events-none
        shadow-[inset_0_0_30px_rgba(36,145,132,0.5)]"
      />

      {/* ================= MAIN GRID ================= */}
      <div
        className="
          relative
          max-w-9xl mx-auto
          px-6 lg:px-10
          grid
          grid-cols-1
          md:grid-cols-4
          lg:grid-cols-[1.2fr_1fr_1fr_1fr]
          gap-10 md:gap-8
        "
      >
        {/* ================= ABOUT ================= */}
        <div className="md:pr-4 lg:pr-6">
          <img
            src={logo}
            alt="E-Summit Logo"
            className="h-10 mb-3 opacity-90"
          />

          <h3 className="text-xl font-bold mb-4 tracking-wide">
            E-Summit IIT Kanpur
          </h3>

          <p className="text-sm text-white/80 mb-5 leading-relaxed text-justify">
            E-Cell, IIT Kanpur aims to induce an entrepreneurial mindset into
            the students and air an innovative streak in them. We are here to
            water the ‘Ideas’ in the bud and help them bloom into impactful
            endeavors through networking student enterprises from campus to
            incubators, seeding funds and angel investors to transform the newly
            proposed ideas into successful start-ups.
          </p>

          <a href="mailto:esummit@ecelliitk.com">
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
              Email Us
            </button>
          </a>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-xl font-bold mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="https://www.ecelliitk.org/" className="hover:text-white">
                E-Cell IIT Kanpur
              </a>
            </li>
            <li>
              <a
                href="https://www.ecelliitk.org/upstart/"
                className="hover:text-white"
              >
                Upstart’ 25
              </a>
            </li>
            <li>
              <a href="#landing" className="hover:text-white">
                Startup Expo’ 25
              </a>
            </li>
            <li>
              <a
                href="https://www.ecelliitk.org/YEC/"
                className="hover:text-white"
              >
                YEC’ 25
              </a>
            </li>
            <li>
              <a
                href="https://www.ecelliitk.org/#contact"
                className="hover:text-white"
              >
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="mt-50">
        <img
          src={footerlogo}
          alt="E-Summit 25 Footer Logo"
          className="
            w-[85%]
            max-w-[720px]
            md:w-[70%]
            lg:w-[190%]
            opacity-90
            drop-shadow-[0_0_30px_rgba(45,212,191,0.45)]
            select-none
            pointer-events-none
          "
        />
      </div> */}

        {/* ================= CONTACT US ================= */}
        <div>
          <h3 className="text-xl font-bold mb-4 tracking-wide">Contact Us</h3>
          <p className="text-sm text-white/80 mb-2">
            Have queries or want to collaborate?
          </p>
          <p className="text-sm text-white/80 mb-4">Reach out to us anytime.</p>

          <a
            href="tel:+919301568760"
            className="
              inline-flex items-center justify-center
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
            📞 +91 93015 68760
          </a>
        </div>

        {/* ================= REACH OUT ================= */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wide">Reach Out</h3>
            <p className="text-sm text-white/80 mb-2">
              1st Floor, B wing, Old Sac Building, IIT Kanpur, Kalyanpur –
              208016
            </p>
            <p className="text-sm text-white/80">esummit@ecelliitk.com</p>
          </div>

          <div className="flex gap-3 mt-6">
            {[
              FaInstagram,
              FaLinkedinIn,
              FaFacebookF,
              FaXTwitter,
              FaYoutube,
            ].map((Icon, i) => (
              <div
                key={i}
                className="
                    w-9 h-9
                    rounded-full
                    bg-white/90 text-black
                    flex items-center justify-center
                    hover:scale-110
                    hover:bg-[#3bd2c1]
                    transition
                  "
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CENTER SVG ================= */}
      <div className="relative mt-8 mb-8 lg:mt-0 lg:mb-2 flex justify-center">
        <img
          src={footerlogo}
          alt="E-Summit 25 Footer Logo"
          className="
            w-[90%]
            max-w-[720px]
            md:w-[70%]
            lg:w-[47%]
            opacity-90
            drop-shadow-[0_0_30px_rgba(45,212,191,0.45)]
            select-none
            pointer-events-none
          "
        />
      </div>

      {/* ================= BOTTOM ================= */}
      <div
        className="
          relative pt-4
          border-t border-white/20
          text-center text-sm text-white/70
        "
      >
        © {new Date().getFullYear()} E-Summit IIT Kanpur. All rights reserved.
      </div>
    </footer>
  );
}
