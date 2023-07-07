import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import Developer from "@/animation/Developer";

export default function Me() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".up-1",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.power4" }
    ).fromTo(
      ".up-2",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.power4" },
      "-=0.5"
    );
  }, []);

  return (
    <>
      <section className="relative mb-60 flex justify-center">
        <div className="absolute w-4/5 right-0 bottom-20">
          <Developer />
        </div>

        <div className="relative bottom-14 up-1 opacity-0">
          <div className="text-2xl relative left-3">Hello, my name is</div>
          <div className="text-10xl font-bold mb-6">JINBOK LEE</div>
          <div className="text-2xl relative left-3">And i am</div>
          <div className="text-10xl font-bold">SOFTWARE</div>
          <div className="text-10xl font-bold">ENGINEER</div>
        </div>
      </section>
    </>
  );
}
