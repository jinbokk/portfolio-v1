import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Architect from "@/animation/Architect";
import DevGroup from "@/animation/DevGroup";
import Salesman from "@/animation/Salesman";
import InteriorDesigner from "@/animation/InteriorDesigner";

const journeyData = [
  {
    title: "Architect",
    duration: "2013-2020",
    desccription: (
      <>
        <p>I studied Architecture at Kwangwoon University from 2013 to 2020.</p>
        <p>I learned how to conceive and design spaces for users.</p>
        <ul>
          <li>
            <a
              href="https://www.i-sh.co.kr/main/index.do"
              target="_blank"
              className="highlight-link"
            >
              <span>SH Corporation / Intern</span>
            </a>
          </li>
          <li>
            <a
              href="https://taehaeng.modoo.at/"
              target="_blank"
              className="highlight-link"
            >
              <span>Taeha Engineering & Architecture / Intern</span>
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Salesman",
    duration: "test",
    desccription: (
      <>
        <p>Since my high school days,</p>
        <p>
          I have been assisting my self-employed parents and naturally learning
          product sales.
        </p>
        <p>After graduating from college, when I was unsure of what to do,</p>
        <p>I worked as a manager at an outdoor product store.</p>
        <ul>
          <li>
            <a
              href="https://k2group.co.kr/main"
              target="_blank"
              className="highlight-link"
            >
              <span>K2 / Store Manager</span>
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Interior Designer",
    duration: "test",
    desccription: (
      <>
        <p>Interior Designer</p>
        <ul>
          <li>
            <a
              href="https://company.hanssem.com/main.do"
              target="_blank"
              className="highlight-link"
            >
              <span>HANSSEM / Territorial Representative</span>
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Software Dev",
    duration: "",
    desccription: (
      <>
        <p>Software Dev</p>
      </>
    ),
  },
];

export default function Journey() {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section>
      <h1>
        <span className="text-highlight">#</span> My journey before becoming a
        developer
      </h1>

      <div className="flex grow w-full h-full justify-start">
        {/* button */}
        <div className="flex flex-col">
          {journeyData.map((item, index) => {
            return (
              <button key={index} onClick={() => setActiveTabId(index)}>
                {item.title}
              </button>
            );
          })}
        </div>

        {/* pannel */}
        <div className="pannel-wrapper">
          {journeyData.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                in={activeTabId === index}
                timeout={250}
                classNames="fade"
              >
                <div hidden={activeTabId !== index} className="p-4">
                  {item.desccription}
                </div>
              </CSSTransition>
            );
          })}
          <div className="animation-wrapper">
            {activeTabId === 0 ? <Architect /> : null}
            {activeTabId === 1 ? <Salesman /> : null}
            {activeTabId === 2 ? <InteriorDesigner /> : null}
            {activeTabId === 3 ? <DevGroup /> : null}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          button {
            padding: 1rem 0;
          }

          .fade-enter {
            opacity: 0;
          }
          .fade-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .fade-exit {
            opacity: 1;
          }

          .fade-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }

          .pannel-wrapper {
            width: 100%;
            position: relative;
          }

          .animation-wrapper {
            position: absolute;
            z-index: -1;
            top: 0;
            width: 100%;
            height: 100%;
          }

          .animation-wrapper svg {
            width: 100%;
            height: 100%;
            opacity: 0.5;
          }
        `}
      </style>
    </section>
  );
}
