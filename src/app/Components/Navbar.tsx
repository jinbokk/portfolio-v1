"use client";

import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";

export default function Navbar() {
  const isHome = usePathname() === "/";
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsDelayed(true);
    } else {
      const timer = setTimeout(() => {
        setIsDelayed(true);
      }, 3300);
      return () => clearTimeout(timer);
    }
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    
    gsap.config({
      nullTargetWarn: false,
    });

    tl.fromTo(
      ".logoContainer",
      { opacity: 0, x: 20, y: -10 },
      { opacity: 1, x: 20, y: 20, duration: 0.5 }
    )
      .fromTo(
        ".navMenu-1",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5 },
        "+=0.3"
      )
      .fromTo(
        ".navMenu-2",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".navMenu-3",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".buttonContainer",
        { opacity: 0 },
        { opacity: 0.8, duration: 1, ease: "expo.power4" }
      );
  }, [isDelayed]);

  return (
    <>
      {isDelayed ? (
        <nav>
          {/* 
          //* navLogo
           */}
          <Link
            href="/"
            className="logoContainer group fixed z-50 sm:w-16 sm:h-16 w-10 h-10 top-12 left-12"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 532.2 460.3"
              style={{ width: "auto", height: "auto" }}
              className="relative z-40 group-hover:-translate-x-1 group-hover:-translate-y-1 ease-in-out duration-300 "
            >
              <path
                className="stroke-white stroke-bold fill-background"
                d="M14.4,230.2L140.1,12.5h252l125.7,217.7L392.1,447.8h-252L14.4,230.2z"
              />
              <path
                className="fill-white"
                d="M165,149.4v10.4h41.2h41.2V225c0,36.5-0.4,67.1-0.8,69.5c-1.7,9.1-4.7,15-10,20.4c-7.1,7.1-12.8,9.2-26.1,9.7
                        c-12.1,0.5-19.4-1.4-27.9-6.9c-5.3-3.4-13.8-11.8-16.9-16.5l-1.5-2.3l-8,7.8l-7.9,7.9l3,4.3c6.4,9.3,18,18.8,28.2,22.8
                        c10.8,4.4,16,5.3,29.8,5.2c14.9,0,21.6-1.4,32.5-6.3l6.7-3.1h34.1c19.3,0,37.6-0.5,42.2-1c30.8-3.8,51.2-19.4,56.2-43
                        c3.6-17.2,0.3-33.8-9-44.5c-6.3-7.3-19.8-14.3-31.1-16.2c-2.2-0.4-3.9-0.9-3.9-1.3c0-0.4,2.3-1.4,5-2.4
                        c20.5-6.9,32.1-26.9,28.7-49.6c-3.4-23.3-20.5-36.3-51.8-39.7c-5-0.5-39.3-0.9-81.3-0.9H165L165,149.4L165,149.4z M323,161.5
                        c16.9,4.4,23.2,12.4,23.2,29.2c0,10.7-2.1,16.4-8.2,22c-8.8,8.2-17.1,10.2-45,11.1l-20.2,0.6v-32.9v-32.9l21.6,0.5
                        C312.2,159.5,317.2,160,323,161.5z M326.3,244.4c11.4,2.6,16.4,5.1,22.3,11c7.3,7.3,9,12.1,8.9,24.1c-0.1,6.4-0.6,9.9-2.1,13.8
                        c-2.7,7.2-9.3,14.2-16.6,17.7c-10.2,5-16.8,6-42.6,6.4l-23.4,0.4v-37.8V242l23.8,0.5C312.9,242.9,322.3,243.4,326.3,244.4z"
              />
            </svg>

            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 532.2 460.3"
              style={{ width: "auto", height: "auto" }}
              className="absolute z-20 top-0 left-0 w-full h-full"
            >
              <path
                className="stroke-none fill-white"
                d="M14.4,230.2L140.1,12.5h252l125.7,217.7L392.1,447.8h-252L14.4,230.2z"
              />
            </svg>
          </Link>

          {/* 
          //* navMenus
           */}
          <ul className="group fixed z-50 top-12 right-14 flex flex-col [&>a]:my-4">
            <Link href="/projects" className="navMenu-1 z-40">
              <li className="hover:text-highlight duration-300">PROJECTS</li>
            </Link>
            <Link href="/info" className="navMenu-2 z-40">
              <li className="hover:text-highlight duration-300">INFO</li>
            </Link>
            <Link href="/contact" className="navMenu-3 z-40">
              <li className="hover:text-highlight duration-300">CONTACT</li>
            </Link>
          </ul>

          {/* 
          //* navButtons
           */}
          <div className="buttonContainer">
            <a
              href="https://github.com/jinbokk"
              target="_blank"
              className="opacity"
            >
              <Image
                src="/icons/github-mark-white.svg"
                alt="github"
                width={30}
                height={30}
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </a>

            <div className="line-1"></div>

            <a
              className="email-text opacity"
              href="mailto:eyelash1024@naver.com"
            >
              eyelash1024@naver.com
            </a>

            <div className="line-2"></div>
          </div>
        </nav>
      ) : null}
    </>
  );
}
