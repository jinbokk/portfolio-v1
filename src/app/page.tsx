"use client";

import Journey from "@/components/landing/Journey";
import Project from "@/components/landing/Project";
import GetInTouch from "@/components/landing/GetInTouch";
import AboutMe from "@/components/landing/AboutMe";
import Me from "@/app/components/landing/Hello";
import SplashScreen from "./components/SplashScreen";
import { useEffect, useState } from "react";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3300);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {isLoading ? (
        <SplashScreen />
      ) : ( */}
        <main>
          <Me />
          <AboutMe />
          <Project />
          <Journey />
          <GetInTouch />
        </main>
      {/* )} */}
    </>
  );
}
