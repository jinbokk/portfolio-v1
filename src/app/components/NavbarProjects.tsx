"use client";

import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import SplashScreen from "./SplashScreen";
import useWindowDimensions from "@hooks/useWindowDimensions";
import { Divide as Hamburger } from "hamburger-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function NavbarProjects({ navMenus }: { navMenus: string[] }) {
  //* Responsive
  const [isOpen, setOpen] = useState(false);
  const windowWidth = useWindowDimensions().width;

  //* menuHighlight
  const [currentMenu, setCurrentMenu] = useState<string | undefined>(undefined);

  return (
    <>
      {windowWidth && windowWidth < 768 ? (
        <nav className="fixed left-0 top-0 z-50 w-full">
          <div className="relative z-50 flex h-[60px] justify-between items-center backdrop-blur-sm border-b border-highlight">
            <Link
              href="/"
              className="relative z-[60] group w-12 h-12 my-3 mx-5"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 532.2 460.3"
                style={{ width: "auto", height: "auto" }}
                className="relative z-40 top-[3px]"
              >
                <path
                  className="stroke-highlight stroke-[25px] fill-background"
                  d="M14.4,230.2L140.1,12.5h252l125.7,217.7L392.1,447.8h-252L14.4,230.2z"
                />
                <path
                  className="fill-highlight"
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
            </Link>

            <div className="z-50 my-3 mx-5">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="var(--highlight-color)"
              />
            </div>
          </div>

          <CSSTransition
            in={isOpen}
            timeout={400}
            classNames="slide"
            unmountOnExit
          >
            <aside className="fixed z-40 top-0 right-0 w-[70vw] h-screen bg-black opacity-90 flex flex-col justify-center items-center">
              <ul>
                {navMenus.map((menu: string, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={`/projects/${menu}`}
                      onClick={() => setCurrentMenu(menu)}
                      className={` navMenu-${index + 1} ${
                        currentMenu === menu ? "text-highlight" : ""
                      } `}
                    >
                      <li className="py-2 my-2">{menu.toUpperCase()}</li>
                    </Link>
                  );
                })}
              </ul>

              <a
                href="https://github.com/jinbokk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 mt-10 mb-2"
              >
                <svg
                  width="35"
                  height="35"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="fill-highlight"
                >
                  <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                </svg>
              </a>

              <a
                className="text-sm tracking-widest p-4"
                href="mailto:eyelash1024@naver.com"
              >
                eyelash1024@naver.com
              </a>
            </aside>
          </CSSTransition>

          <CSSTransition
            in={isOpen}
            timeout={400}
            classNames="blur"
            unmountOnExit
          >
            <div
              className="fixed z-10 top-0 left-0 w-screen h-screen"
              onClick={() => setOpen(false)}
            ></div>
          </CSSTransition>
        </nav>
      ) : (
        <nav className="hidden md:block">
          <Link
            href="/"
            className="logoContainer  group fixed z-50 sm:w-16 sm:h-16 w-10 h-10 top-12 left-12"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 532.2 460.3"
              style={{ width: "auto", height: "auto" }}
              className="relative z-40 group-hover:-translate-x-1 group-hover:-translate-y-1 ease-in-out duration-300 "
            >
              <path
                className="stroke-highlight stroke-[25px] fill-background"
                d="M14.4,230.2L140.1,12.5h252l125.7,217.7L392.1,447.8h-252L14.4,230.2z"
              />
              <path
                className="fill-highlight"
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
                className="stroke-none fill-highlight"
                d="M14.4,230.2L140.1,12.5h252l125.7,217.7L392.1,447.8h-252L14.4,230.2z"
              />
            </svg>
          </Link>

          <ul className="group fixed z-50 top-12 right-14 flex flex-col [&>a]:my-4 duration-300">
            {navMenus.map((menu: string, index: number) => {
              return (
                <Link
                  key={index}
                  href={`/projects/${menu}`}
                  onClick={() => setCurrentMenu(menu)}
                  className={` navMenu-${index + 1} ${
                    currentMenu === menu ? "text-highlight" : ""
                  } hover:text-highlight`}
                >
                  <li>{menu.toUpperCase()}</li>
                </Link>
              );
            })}
          </ul>

          <div className="buttonContainer  fixed z-50 bottom-0 right-[80px] flex items-center [writing-mode:vertical-lr]">
            <a
              href="https://github.com/jinbokk"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <svg
                width="35"
                height="35"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="fill-white group-hover:fill-highlight duration-300"
              >
                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
              </svg>
            </a>

            <div className="border border-white h-[70px] w-px my-2 select-none"></div>
            <a
              className="text-sm hover:text-highlight duration-300 tracking-widest"
              href="mailto:eyelash1024@naver.com"
            >
              eyelash1024@naver.com
            </a>
            <div className="border border-white h-[90px] w-px ms-2 select-none"></div>
          </div>
        </nav>
      )}

      <style jsx>
        {`
          .slide-enter {
            transform: translateX(101%);
          }

          .slide-enter-active {
            transform: translateX(0);
            transition: transform 0.4s;
          }

          .slide-exit {
            transform: translateX(0);
          }

          .slide-exit-active {
            transform: translateX(101%);
            transition: transform 0.4s;
          }

          .blur-enter {
            opacity: 0;
            backdrop-filter: blur(0);
          }

          .blur-enter-active {
            opacity: 1;
            backdrop-filter: blur(5px);
            transition: 0.4s;
          }

          .blur-enter-done {
            backdrop-filter: blur(5px);
          }

          .blur-exit {
            opacity: 1;
            backdrop-filter: blur(5px);
          }

          .blur-exit-active {
            opacity: 0;
            backdrop-filter: blur(0);
            transition: 0.4s;
          }
        `}
      </style>
    </>
  );
}
