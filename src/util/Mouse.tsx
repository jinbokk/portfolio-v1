"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";

export default function Mouse() {
  //* Mouse
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed w-full h-full" style={{ zIndex: -10 }}>
      <motion.div
        className="transition duration-300 w-full h-full"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 112, 124, 0.15),
              transparent 80%
            )
          `,
        }}
      />
    </div>
  );
}
