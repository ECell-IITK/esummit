import { useEffect, useRef } from "react";

export default function DotCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable on mobile
    // if (window.innerWidth < 768) return;

    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]
                 bg-[#85DFD4] shadow-[0_0_10px_rgba(133,223,212,0.8)]
                 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
}
