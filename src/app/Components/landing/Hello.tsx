import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Developer from "@animation/Developer";

export default function Hello() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".up-1",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.power4" }
    ).fromTo(
      ".up-2",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.power4" },
      "-=0.3"
    );
  }, []);

  return (
    <>
      <section id="hello" className="relative mb-32 flex justify-center">
        <div
          className="absolute bottom-44 -right-20 origin-right scale-[2] opacity-50
          md:w-full md:h-fit md:scale-[1.5] md:opacity-50 md:-right-44
          lg:w-4/5 lg:right-0 lg:bottom-20 lg:scale-[1] lg:opacity-100
        "
        >
          <Developer />
        </div>

        <div className="relative bottom-14">
          <div
            className="up-1 lg:text-2xl md:text-xl text-xl relative left-3 text-highlight"
          >
            Hello, my name is
          </div>
          <div className="up-1 lg:text-10xl md:text-8xl text-7xl font-bold mb-6">
            JINBOK LEE
          </div>
          <div className="up-2 lg:text-2xl md:text-xl text-xl relative left-3 text-highlight">
            And i am
          </div>
          <div className="up-2 lg:text-10xl md:text-8xl text-7xl font-bold">
            SOFTWARE
          </div>
          <div className="up-2 lg:text-10xl md:text-8xl text-7xl font-bold">
            ENGINEER
          </div>
        </div>
      </section>
    </>
  );
}
