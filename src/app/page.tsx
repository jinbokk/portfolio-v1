"use client";

import { gsap } from "gsap";
import Image from "next/image";
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
    <>
      <main>
        <section className="h-screen flex flex-col justify-center items-start">
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
        </section>

        <section className="w-full">
          <h1># about me</h1>
          <div className="flex justify-around">
            <div className="basis-2/3">
              <h2>
                Hello! My name is Jinbok. I have a passion for developing
                software that brings value to people&apos;s lives.
                Embarrassingly, I couldn&apos;t easily answer the question of
                &quot;What do I really want to do in the future?&quot; for a
                while. However, through my experiences, I&apos;ve contemplated
                what truly interests me, and I made up my mind to become a
                developer. I aspire to grow as a frontend developer, working
                closely with people to create meaningful experiences. Recently,
                I launched a website for my sister&apos;s cake workshop using
                the MERN stack. Additionally, I am currently studying TypeScript
                and Next.js!
              </h2>
            </div>

            <div className="basis-1/3">
              <Image
                src="/images/profile_image_1.png"
                alt=""
                width={250}
                height={250}
                quality={100}
                style={{
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h1># my journey before becoming a developer</h1>
          <h2>journey</h2>
        </section>

        <section className="w-full">
          <h1># some things i&apos;ve built</h1>
          <h2>built</h2>
        </section>

        <section className="w-full">
          <h1># what is next ?</h1>
          <h2>say hello</h2>
        </section>
      </main>

      <style jsx>{`
        section {
          margin-bottom: 10rem;
        }

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
