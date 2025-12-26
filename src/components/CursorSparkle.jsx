import { useEffect } from "react";

export default function CursorSparkle() {
  useEffect(() => {
    // Disable on mobile
    // if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      const sparkle = document.createElement("div");
      sparkle.className = "cursor-sparkle";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 60);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
