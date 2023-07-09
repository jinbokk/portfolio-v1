import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Architect from "@/animation/Architect";
import DevGroup from "@/animation/DevGroup";
import Salesman from "@/animation/Salesman";
import InteriorDesigner from "@/animation/InteriorDesigner";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Intern from "@/animation/Intern";

const journeyData = [
  {
    title: "HANSSEM",
    duration: "2021-2022",
    description: (
      <>
        <h2 className="font-bold tracking-wide text-lg">
          Territorial Representative
          <a
            href="https://company.hanssem.com/main.do"
            target="_blank"
            className="text-highlight"
          >
            {" "}
            @HANSSEM
          </a>
        </h2>

        <p className="opacity-60">Re-house division</p>
        <p className="opacity-60">Jun 2021 - Nov 2021</p>

        <ul className="mt-5 font-inter">
          <li>Interior design and material procurement</li>
          <li>B2B sales targeting domestic interior design companies</li>
        </ul>
        {/* <p>
          In my opinion, I thought that interior design was more liberating than
          architectural design.<br></br>I pursued a career in interior design,
          leveraging my major, and joined an interior design company<br></br>
          where I worked on interior design and related sales tasks.
        </p>
        <ul className="mt-3">
          <li>
            <a
              href="https://company.hanssem.com/main.do"
              target="_blank"
              className="hover:text-highlight duration-300"
            >
              <span>HANSSEM / Territorial Representative</span>
            </a>
          </li>
        </ul> */}
      </>
    ),
  },
  {
    title: "K2",
    duration: "2020-2021",
    description: (
      <>
        <h2 className="font-bold tracking-wide text-lg">
          Store Manager
          <a
            href="https://k2group.co.kr/main"
            target="_blank"
            className="text-highlight"
          >
            {" "}
            @K2
          </a>
        </h2>

        <p className="opacity-60">Retail store</p>
        <p className="opacity-60">May 2020 - Jun 2021</p>

        <ul className="mt-5 font-inter">
          <li>Managed store operations and product sales</li>
          <li>Oversaw customer satisfaction initiatives and related tasks</li>
        </ul>
        {/* <p>After graduating from college, when I was unsure of what to do,</p>
        <p>
          I worked as a manager at an outdoor product store, and naturally
          learning product sales.
        </p>
        <ul className="mt-5 font-inter">
          <li>
            <a
              href="https://k2group.co.kr/main"
              target="_blank"
              className="hover:text-highlight duration-300"
            >
              <span>K2 / Store Manager</span>
            </a>
          </li>
        </ul> */}
      </>
    ),
  },
  {
    title: "Seoul Housing",
    duration: "2019",
    description: (
      <>
        <h2 className="font-bold tracking-wide text-lg">
          Intern{" "}
          <a
            href="https://www.i-sh.co.kr/main/index.do"
            target="_blank"
            className="text-highlight"
          >
            @Seoul Housing
          </a>
        </h2>

        <p className="opacity-60">Shared property management division</p>
        <p className="opacity-60">Jan 2019 - Feb 2019</p>

        <ul className="mt-5 font-inter">
          <li>Examining land and taking pictures for the assigned area</li>
          <li>Managing land registers for the assigned plots of land</li>
        </ul>
        {/* <p>I studied Architecture at Kwangwoon University from 2013 to 2020.</p>
        <p>I learned how to plan and design spaces for users.</p>
        <ul className="mt-3">
          <li>
            <a
              href="https://www.i-sh.co.kr/main/index.do"
              target="_blank"
              className="hover:text-highlight duration-300"
            >
              <span>SH Corporation / Intern</span>
            </a>
          </li>
          <li>
            <a
              href="https://taehaeng.modoo.at/"
              target="_blank"
              className="hover:text-highlight duration-300"
            >
              <span>Taeha Engineering & Architecture / Intern</span>
            </a>
          </li>
        </ul> */}
      </>
    ),
  },
  {
    title: "TAEHA",
    duration: "2018",
    description: (
      <>
        <h2 className="font-bold tracking-wide text-lg">
          Intern{" "}
          <a
            href="https://taehaeng.modoo.at/"
            target="_blank"
            className="text-highlight"
          >
            @TAEHA
          </a>
        </h2>

        <p className="opacity-60">Architectural design team</p>
        <p className="opacity-60">Jul 2018 - Aug 2018</p>

        <ul className="mt-5 font-inter">
          <li>
            Assisted in the architectural drawing design for the Janganpyeong
            Used Car Complex urban development project
          </li>
          <li>
            Created 3D illustrative images for the Seoul City collaboration
            project proposal
          </li>
        </ul>
        {/* <p>I studied Architecture at Kwangwoon University from 2013 to 2020.</p>
        <p>I learned how to plan and design spaces for users.</p>
        <ul className="mt-5 font-inter">
          <li>
            <a
              href="https://www.i-sh.co.kr/main/index.do"
              target="_blank"
              className="hover:text-highlight duration-300"
            >
              <span>SH Corporation / Intern</span>
            </a>
          </li>
          <li>
            <a
              href="https://taehaeng.modoo.at/"
              target="_blank"
              className="hover:text-highlight duration-300"
            >
              <span>Taeha Engineering & Architecture / Intern</span>
            </a>
          </li>
        </ul> */}
      </>
    ),
  },

  // {
  //   title: "Software Engineer",
  //   duration: "2023-",
  //   description: (
  //     <>
  //       <p>
  //         On my long journey back, I finally discovered what I truly wanted.
  //         <br></br>
  //         It was either enhancing existing things or developing something new,
  //         all with the purpose of improving people's quality of life.<br></br>
  //         This was the work I genuinely desired to do. I aspire to grow as a
  //         software engineer, collaborating with like-minded developers
  //         <br></br>to create a unified service or product.
  //       </p>
  //     </>
  //   ),
  // },
];

export default function Journey() {
  const [activeTabId, setActiveTabId] = useState(0);
  const windowWidth = useWindowDimensions().width;

  return (
    <section id="journey" className="h-fit">
      <h1>
        <span className="text-highlight">#</span> My little journey
      </h1>

      <div className="min-h-[500px] flex flex-col md:flex-row lg:flex-row w-full h-full justify-start pt-5">
        {windowWidth && windowWidth < 768 ? (
          <div className="flex flex-row w-full overflow-x-scroll pb-6 mb-3 justify-start">
            {journeyData.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setActiveTabId(index)}
                  className="group cursor-pointer px-5 text-center"
                >
                  <div className="text-xs opacity-50 whitespace-nowrap">
                    {item.duration}
                  </div>
                  <div
                    className={`group-hover:text-highlight duration-300 whitespace-nowrap ${
                      activeTabId === index ? "text-highlight" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col pe-10">
            {journeyData.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setActiveTabId(index)}
                  className="group cursor-pointer py-2 text-start"
                >
                  {/* <div className="text-xs opacity-50">{item.duration}</div> */}
                  <div
                    className={`group-hover:text-highlight duration-300 whitespace-nowrap ${
                      activeTabId === index ? "text-highlight" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                  {/* {index + 1 === journeyData.length ? null : (
                    <div className="h-[30px] w-px border border-white opacity-50 mx-auto"></div>
                  )} */}
                </div>
              );
            })}
          </div>
        )}

        {/* pannel */}
        <div className="relative w-full">
          {journeyData.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                in={activeTabId === index}
                timeout={250}
                classNames="fade"
              >
                <div hidden={activeTabId !== index}>{item.description}</div>
              </CSSTransition>
            );
          })}
          <div
            className="absolute -z-10 mx-[10%] h-full opacity-70 scale-[1.5] -bottom-64
          lg:-bottom-36 lg:scale-[1]
          "
          >
            {activeTabId === 0 ? <InteriorDesigner /> : null}
            {activeTabId === 1 ? <Salesman /> : null}
            {activeTabId === 2 ? <Intern /> : null}
            {activeTabId === 3 ? <Architect /> : null}
            {/* {activeTabId === 3 ? <DevGroup /> : null} */}
          </div>
        </div>
      </div>

      <style jsx>
        {`
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
    </section>
  );
}
