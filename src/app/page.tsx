"use client";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    // mainTextContainer
    gsap.fromTo(
      ".up-1",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.power4" }
    );
    gsap
      .fromTo(
        ".up-2",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.power4" }
      )
      .delay(0.5);
  }, []);

  return (
    <div className="container">
      <div className="mainTextContainer">
        <div className="up-1">LEE</div>
        <div className="up-2">JINBOK</div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .mainTextContainer {
          height: 100vh;
          font-size: 150px;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-left: 50px;
        }
      `}</style>
    </div>
  );
}
