import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

const socials = [
  { icon: FaInstagram, link: "https://www.instagram.com/ecelliitk/" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/ecelliitk/posts/?feedView=all" },
  { icon: FaXTwitter, link: "https://x.com/ecelliitk" },
  { icon: FaYoutube, link: "https://www.youtube.com/channel/UCvxavCg0UhXq6oKkrBHc9zQ" },
  { icon: FaFacebookF, link: "https://www.facebook.com/ecelliitk" },
];

const SocialSidebar = () => {
  return (
    <div
      className="
        fixed
        right-2 md:right-3
        top-1/2
        -translate-y-1/2
        z-50
        flex
        flex-col
        gap-3 md:gap-3
      "
    >
      {socials.map(({ icon: Icon, link }, i) => (
        <a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center
            w-8 h-8 md:w-10 md:h-10
            rounded-full
            bg-teal-200/70
            border border-white/80
            text-teal-900
            hover:text-white
            hover:bg-teal-300/90
            hover:shadow-[0_0_18px_rgba(94,234,212,0.6)]
            transition-all duration-300
          "
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
