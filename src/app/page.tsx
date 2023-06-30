"use client";

import Journey from "@/components/landing/Journey";
import Project from "@/components/landing/Project";
import GetInTouch from "@/components/landing/GetInTouch";
import AboutMe from "@/components/landing/AboutMe";
import Landing from "@/components/landing/Landing";

export default function Home() {


  return (
    <>
      <Landing />
      <AboutMe />
      <Journey />
      <Project />
      <GetInTouch />
    </>
  );
}
