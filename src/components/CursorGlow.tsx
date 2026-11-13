
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const smoothX = useSpring(mouseX, {
  stiffness: 300,
  damping: 35,
  mass: 0.5,
});

const smoothY = useSpring(mouseY, {
  stiffness: 300,
  damping: 35,
  mass: 0.5,
});

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;

    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
    setVisible(true);

    const target = event.target;

    const hovering =
        target instanceof Element &&
        !!target.closest(".glass, button, a, [data-cursor-glow]");

    setIsHovering(hovering);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-[-260px] top-[-260px] z-[1] hidden h-[520px] w-[520px] rounded-full md:block"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        x: smoothX,
        y: smoothY,
        background: `radial-gradient(
            circle,
            rgba(34,211,238,${isHovering ? 0.16 : 0.10}) 0%,
            rgba(59,130,246,${isHovering ? 0.10 : 0.06}) 35%,
            rgba(139,92,246,${isHovering ? 0.08 : 0.045}) 55%,
            transparent 72%
            )`,
      }}
    />
  );
}
