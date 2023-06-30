import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import Developer from "@/animation/Developer";

export default function Landing() {
  useLayoutEffect(() => {
    // mainTextContainer
    gsap
      .fromTo(
        ".up-1",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.power4" }
      )
      .delay(1);
    gsap
      .fromTo(
        ".up-2",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.power4" }
      )
      .delay(1.7);
  }, []);

  return (
    <>
      <section className="relative mb-60 flex justify-center">
        <div
          style={{
            position: "absolute",
            width: "80%",
            right: "0",
            bottom: "10%",
          }}
        >
          <Developer />
        </div>

        <div className="relative bottom-14">
          <div className="up-1">
            <div style={{ fontSize: "30px" }}>Hello, my name is</div>

            <div className="mainTextContainer">
              <div>JINBOK LEE</div>
            </div>
          </div>

          <div className="up-2">
            <div style={{ fontSize: "30px" }}>And i am</div>

            <div className="mainTextContainer">
              <div>SOFTWARE</div>
              <div>ENGINEER</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mainTextContainer {
          font-size: 150px;
          line-height: 150px;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
      `}</style>
    </>
  );
}
