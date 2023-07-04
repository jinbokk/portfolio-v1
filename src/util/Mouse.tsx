"use client"

import { motion, useMotionTemplate } from "framer-motion";

export default function Mouse({ mouseX, mouseY }) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 absolute"
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
  );
}
