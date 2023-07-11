"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ setIsLoading }) {
  const containerTransition = 1;
  const pathTransition = 1;
  const LogoTransition = 0.5;

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const pathVariants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: pathTransition, ease: "easeInOut" },
    },
  };

  const logoVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: LogoTransition,
        ease: "easeInOut",
        delay: pathTransition + LogoTransition,
      },
    },
  };


  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationEnd={() => setIsLoading(false)}
      >
        <div className="splash_container">
          <div className="splash_logo">
            <motion.svg
              initial="initial"
              animate="animate"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 532.2 460.3"
              style={{ width: "100%", height: "100%" }}
            >
              <motion.path
                variants={pathVariants}
                className="fill-none stroke-highlight stroke-[25px]"
                style={{
                  strokeLinecap: "round",
                }}
                d="M14.4,230.2L140.1,12.5h252l125.7,217.7L392.1,447.8h-252L14.4,230.2z"
              />
              <motion.path
                variants={logoVariants}
                className="fill-highlight"
                d="M165,149.4v10.4h41.2h41.2V225c0,36.5-0.4,67.1-0.8,69.5c-1.7,9.1-4.7,15-10,20.4c-7.1,7.1-12.8,9.2-26.1,9.7
                  c-12.1,0.5-19.4-1.4-27.9-6.9c-5.3-3.4-13.8-11.8-16.9-16.5l-1.5-2.3l-8,7.8l-7.9,7.9l3,4.3c6.4,9.3,18,18.8,28.2,22.8
                  c10.8,4.4,16,5.3,29.8,5.2c14.9,0,21.6-1.4,32.5-6.3l6.7-3.1h34.1c19.3,0,37.6-0.5,42.2-1c30.8-3.8,51.2-19.4,56.2-43
                  c3.6-17.2,0.3-33.8-9-44.5c-6.3-7.3-19.8-14.3-31.1-16.2c-2.2-0.4-3.9-0.9-3.9-1.3c0-0.4,2.3-1.4,5-2.4
                  c20.5-6.9,32.1-26.9,28.7-49.6c-3.4-23.3-20.5-36.3-51.8-39.7c-5-0.5-39.3-0.9-81.3-0.9H165L165,149.4L165,149.4z M323,161.5
                  c16.9,4.4,23.2,12.4,23.2,29.2c0,10.7-2.1,16.4-8.2,22c-8.8,8.2-17.1,10.2-45,11.1l-20.2,0.6v-32.9v-32.9l21.6,0.5
                  C312.2,159.5,317.2,160,323,161.5z M326.3,244.4c11.4,2.6,16.4,5.1,22.3,11c7.3,7.3,9,12.1,8.9,24.1c-0.1,6.4-0.6,9.9-2.1,13.8
                  c-2.7,7.2-9.3,14.2-16.6,17.7c-10.2,5-16.8,6-42.6,6.4l-23.4,0.4v-37.8V242l23.8,0.5C312.9,242.9,322.3,243.4,326.3,244.4z"
              />
            </motion.svg>
          </div>
        </div>
        <style jsx>
          {`
            .splash_container {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }

            .splash_logo {
              width: 10%;
              min-width: 100px;
              height: 10%;
              min-height: 100px;
              animation: slide-up 0.3s ease-out forwards;
              animation-delay: 3s;
            }

            @keyframes slide-up {
              0% {
                opacity: 1;
              }

              40% {
                transform-origin: center;
                transform: scale(1.2);
                opacity: 1;
              }

              100% {
                transform-origin: center;
                transform: scale(0);
                opacity: 0;
              }
            }
          `}
        </style>
      </motion.div>
    </AnimatePresence>
  );
}
