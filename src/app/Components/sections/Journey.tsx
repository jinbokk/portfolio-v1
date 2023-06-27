"use client";

import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Architect from "../../animation/Architect";
import Salesman from "../../animation/Salesman";

const journeyData = [
  {
    title: "Architect",
    duration: "2013-2020",
    desccription: (
      <div>
        <p>architect</p>
        <p>architect</p>
        <p>architect</p>
      </div>
    ),
  },
  {
    title: "Salesman",
    duration: "2013-2020",
    desccription: (
      <div>
        <p>architect</p>
        <p>architect</p>
        <p>architect</p>
      </div>
    ),
  },
  {
    title: "Software Dev",
    duration: "2013-2020",
    desccription: (
      <div>
        <p>architect</p>
        <p>architect</p>
        <p>architect</p>
      </div>
    ),
  },
];

export default function Journey() {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <>
      <div className="flex w-full justify-between">
        {/* button */}
        <div className="flex flex-col">
          {journeyData.map((item, i) => {
            return <button key={i}>{item.title}</button>;
          })}
        </div>

        {/* pannel */}
        <div className="w-full h-2/3">
          {journeyData.map((item, i) => {
            return (
              <CSSTransition
                key={i}
                in={activeTabId === i}
                timeout={250}
                classNames="fade"
              >
                <div>{item.desccription}</div>
              </CSSTransition>
            );
          })}
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
        `}
      </style>
    </>
  );
}
