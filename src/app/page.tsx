"use client";

import Navbar from "@components/Navbar";
import Journey from "@components/landing/Journey";
import Project from "@components/landing/Project";
import GetInTouch from "@components/landing/GetInTouch";
import AboutMe from "@components/landing/AboutMe";
import Me from "@components/landing/Hello";
import SplashScreen from "@components/SplashScreen";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

// function Section({ children }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//       <span
//        ref={ref}
//         style={{
//           transform: isInView ? "" : "translateX(-200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//         }}
//       >
//         {children}
//       </span>
//   );
// }

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <SplashScreen setIsLoading={setIsLoading} />
      ) : (
        <>
          <Navbar navMenus={["about", "projects", "journey", "contact"]} />
          <main>
            {/* <Section> */}
            <Me />
            {/* </Section> */}

            {/* <Section> */}
            <AboutMe />
            {/* </Section> */}

            {/* <Section> */}
            <Project />
            {/* </Section> */}

            {/* <Section> */}
            <Journey />
            {/* </Section> */}

            {/* <Section> */}
            <GetInTouch />
            {/* </Section> */}
          </main>
        </>
      )}
    </>
  );
}
