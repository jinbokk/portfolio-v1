import useWindowDimensions from "@hooks/useWindowDimensions";
import Image from "next/image";
import Link from "next/link";
import GithubSimpleLogo from "/public/icons/github-logo-simple.svg";
import WebsiteClickLogo from "/public/icons/website-click-logo.svg";

const projectData = [
  {
    title: "EESO CAKE",
    duration: "SEP 2022 - MAR 2023 / 6mo",
    preview: "/images/eesocake_preview.png",
    time: "2mo",
    stack: ["React", "Redux", "MongoDB", "Node.js", "AWS EC2"],
    github: "https://github.com/jinbokk/eeso-cake-app",
    detail: "/projects/eeso-cake-app",
    url: "https://eeso-cake.com",
    description:
      "This is a website for a custom cake studio. The website includes a feature that retrieves cake images from various categories by crawling Instagram accounts. Additionally, ordering and payment process has been implemented through a contract with a payment gateway company (Danal) .",
  },
  {
    title: "NETFLIX",
    duration: "JUL - SEP 2022 / 2mo",
    preview: "/images/netflix_preview.png",
    time: "2mo",
    stack: ["React", "Redux"],
    github: "https://github.com/jinbokk/JB-NETFLIX",
    url: "https://netflix-jinbokk.netlify.app",
    detail: "/projects/JB-NETFLIX",
    description:
      "This website is a movie information lookup platform that resembles the design of NETFLIX. It uses The Movie Database (TMDB) API to retrieve movie details and creates a dynamic user experience by automatically playing movie trailers.",
  },
  {
    title: "MUSICOR",
    duration: "JUN - JUL 2022 / 1mo",
    preview: "/images/musicor_preview.png",
    time: "2mo",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/jinbokk/MUSICOR",
    url: "https://musicor.netlify.app",
    detail: "/projects/MUSICOR",
    description:
      "This web app recommends music based on colors you choose. Each color represents a different feeling, and the app uses Spotify API to suggest songs that match that feeling. So, when user pick a color, the app suggests music that fits that mood.",
  },
  {
    title: "THE JINBOK TIMES",
    duration: "MAY - JUN 2022 / 1mo",
    preview: "/images/thejinboktimes_preview.png",
    time: "2mo",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/jinbokk/THE_JINBOK_TIMES",
    url: "https://jinbok-news.netlify.app",
    detail: "/projects/THE_JINBOK_TIMES",
    description:
      "This is my first web development project, a news browsing website. Using the NewsCatcher API, I implemented a feature to browse news articles from various media outlets based on different categories. The website also features a responsive web design.",
  },
];

export default function Project() {
  const windowWidth = useWindowDimensions().width;

  return (
    <>
      <section id="projects">
        <h1>
          <span className="text-highlight">#</span> Some things i&apos;ve built
        </h1>

        {projectData.map((item, index) => {
          return windowWidth && windowWidth < 1024 ? (
            <div
              key={index}
              className="relative drop-shadow-lg rounded-md bg-teal-700/[.2] px-4 py-7 mb-10"
            >
              <div>
                <div
                  className={`mb-1 text-highlight text-sm ${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  Personal Project
                </div>
                <div
                  className={`text-xs opacity-80 ${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  {item.duration}
                </div>
              </div>

              <Link href={item.detail} className="text-highlight" replace>
                <h3
                  className={`${index % 2 === 0 ? "text-end" : "text-start"}`}
                >
                  {item.title}
                </h3>
              </Link>

              <div className="opacity-80">
                <div
                  className={`relative z-10 ${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  <p className="font-inter text-sm leading-relaxed mb-10">
                    {item.description}
                  </p>
                  <div
                    className={`my-4 flex ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    {item.stack.map((stack, stackIndex) => {
                      return (
                        <span key={stackIndex} className="mx-2 text-sm">
                          {stack}
                        </span>
                      );
                    })}
                  </div>

                  <div
                    className={`flex items-center justify-end ${
                      index % 2 === 0 ? "" : "flex-row-reverse"
                    }`}
                  >
                    <Link
                      href={item.detail}
                      className="text-highlight duration-200 mx-2 border py-1 px-2 border-highlight hover:text-black hover:bg-highlight"
                    >
                      readme.md
                    </Link>
                    <a
                      href={item.github}
                      target="_blank"
                      className="cursor-pointer hover:text-highlight duration-200 mx-2"
                    >
                      <GithubSimpleLogo />
                    </a>
                    <a
                      href={item.url}
                      target="_blank"
                      className="cursor-pointer hover:text-highlight duration-200 mx-2"
                    >
                      <WebsiteClickLogo />
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href={item.detail}
                className="absolute top-0 left-0 w-full h-full m-0 -z-10"
                replace
              >
                <Image
                  priority
                  src={item.preview}
                  alt=""
                  width={700}
                  height={700}
                  className="w-full h-full object-cover opacity-[5%]"
                />
              </Link>
            </div>
          ) : (
            <div
              key={index}
              className={`flex justify-center items-center py-20 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`text-end w-3/5 relative ${
                  index % 2 === 0 ? "items-end right-20" : "left-20"
                }`}
              >
                <div
                  className={`${index % 2 === 0 ? "text-end" : "text-start"}`}
                >
                  <div className="mb-1 font-bold text-highlight">
                    Personal Project
                  </div>
                  <div className="text-sm opacity-80">{item.duration}</div>
                </div>
                <Link
                  href={item.detail}
                  className="hover:text-highlight duration-300"
                >
                  <div
                    className={`text-4xl my-2 font-bold font-inter ${
                      index % 2 === 0 ? "text-end" : "text-start"
                    }`}
                  >
                    {item.title}
                  </div>
                </Link>
                <p
                  className={`relative bg-highlight-dark drop-shadow-lg font-inter leading-relaxed z-10 p-4 ${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  {item.description}
                </p>
                <div
                  className={`my-4 flex ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  {item.stack.map((stack, stackIndex) => {
                    return (
                      <span key={stackIndex} className="mx-2">
                        {stack}
                      </span>
                    );
                  })}
                </div>
                <div
                  className={`flex items-center justify-end ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <Link
                    href={item.detail}
                    className="text-highlight duration-200 mx-2 border py-1 px-2 border-highlight hover:text-black hover:bg-highlight"
                  >
                    readme.md
                  </Link>
                  <a
                    href={item.github}
                    target="_blank"
                    className="hover:text-highlight duration-200 mx-2"
                  >
                    <GithubSimpleLogo />
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    className="hover:text-highlight duration-200 mx-2"
                  >
                    <WebsiteClickLogo />
                  </a>
                </div>
              </div>

              <div
                className={`relative w-1/2 ${
                  index % 2 === 0 ? "items-end left-20" : " right-20"
                }`}
              >
                <Link
                  href={item.detail}
                  className="w-fit h-fit m-0 z-1
                  after:absolute after:top-0 after:w-full after:h-full after:bg-gray-500 after:mix-blend-multiply
                  hover:after:bg-transparent after:duration-300"
                >
                  <Image
                    priority
                    src={item.preview}
                    alt=""
                    width={700}
                    height={700}
                    className="w-full h-full"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
