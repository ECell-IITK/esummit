const InfiniteMarquee = ({
  text = "14TH EDITION : AEGIS OF ASCENDENCE",
}) => {
  return (
    <div className="relative -mt-6 z-20">
      <div
        className="
          overflow-hidden
          py-2
          bg-gradient-to-r
          from-black/40
          via-black/25
          to-black/40
          backdrop-blur-md
          border-t border-teal-300/20
          border-b border-teal-300/20
          shadow-[0_0_30px_rgba(94,234,212,0.25)]
        "
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="
                mx-8
                text-xs md:text-sm
                tracking-widest
                font-semibold
                text-teal-200/90
              "
            >
              ✦ {text} ✦
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
