"use client"

import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (pathname === "/") {
      //* buttonContainer
      gsap
        .fromTo(
          ".buttonContainer",
          { opacity: 0 },
          {
            opacity: 0.8,
            duration: 1,
            ease: "expo.power4",
          }
        )
        .delay(2.5);

      //* menuContainer
      gsap
        .fromTo(
          ".right-1",
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        )
        .delay(1.5);
      gsap
        .fromTo(
          ".right-2",
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        )
        .delay(1.75);
      gsap
        .fromTo(
          ".right-3",
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        )
        .delay(2);
    } else {
      return;
    }
  }, []);

  return (
    <>
      <div className="menuContainer">
        <Link href="/projects" className="right-1 z-40">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/icons/triangle-right.svg"
              alt=""
              width={25}
              height={25}
            />
            <div className="menuText">PROJECTS</div>
          </div>
        </Link>
        <Link href="/info" className="right-2 z-40">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/icons/triangle-right.svg"
              alt=""
              width={25}
              height={25}
            />
            <div className="menuText">INFO</div>
          </div>
        </Link>
        <Link href="/contact" className="right-3 z-40">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/icons/triangle-right.svg"
              alt=""
              width={25}
              height={25}
            />
            <div className="menuText">CONTACT</div>
          </div>
        </Link>
      </div>

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
          />
        </a>

        <div className="line-1"></div>

        <a className="email-text opacity" href="mailto:eyelash1024@naver.com">
          eyelash1024@naver.com
        </a>

        <div className="line-2"></div>
      </div>

      <style jsx>
        {`
          .menuContainer {
            position: fixed;
            top: 50px;
            right: 50px;
            height: 20%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            z-index: 50;
          }

          .menuText {
            font-size: 15px;
            font-weight: bold;
            color: white;
            cursor: pointer;
            opacity: 0.8;
            transition: 0.5s;
            padding: 10px;
            border-radius: 15px;
          }

          .menuText:hover {
            opacity: 1;
            transition: 0.5s;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 15px;
          }

          .buttonContainer {
            position: fixed;
            bottom: 0;
            right: 80px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            writing-mode: vertical-rl;
            font-family: var(--font-roboto-mono);
            z-index: 50;
          }

          .opacity {
            opacity: 0.8;
          }

          .opacity:hover {
            opacity: 1;
            transition: 0.5s;
          }

          .email-text {
            font-size: 13px;
            letter-spacing: 2px;
          }

          .line-1 {
            height: 70px;
            width: 1px;
            border: 1px var(--main-text-color) solid;
            opacity: 0.5;
            margin: 10px 0;
            user-select: none;
          }

          .line-2 {
            height: 100px;
            width: 1px;
            border: 1px var(--main-text-color) solid;
            opacity: 0.5;
            margin-top: 10px;
            user-select: none;
          }
        `}
      </style>
    </>
  );
}
