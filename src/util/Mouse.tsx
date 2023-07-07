"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Mouse() {
  //* Mouse
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [mouseTrigger, setMouseTrigger] = useState(false);
  const radius = useSpring(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    setMouseTrigger(true);
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (mouseTrigger) {
    radius.set(400);
  }

  return (
    <div className="fixed w-full h-full -z-10">
      <motion.div
        className="transition duration-300 w-full h-full"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 112, 124, 0.15),
              transparent 80%
            )
          `,
        }}
      />
    </div>
  );
}
