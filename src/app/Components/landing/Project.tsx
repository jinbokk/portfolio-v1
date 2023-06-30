import Image from "next/image";
import GithubSimpleLogo from "public/icons/github-logo-simple.svg";
import WebsiteClickLogo from "public/icons/website-click-logo.svg";

const projectData = [
  {
    title: "EESO CAKE",
    duration: "SEP 2022 - MAR 2023 / 6mo",
    preview: "/images/eesocake_preview.png",
    time: "2mo",
    stack: ["React", "Redux", "MongoDB", "Node.js", "AWS EC2"],
    github: "https://github.com/jinbokk/eeso-cake-app",
    url: "https://eeso-cake.com",
    description:
      "This is a website for a custom cake studio operated by my sister. The website includes a feature that retrieves cake images from various categories by crawling her Instagram accounts. Additionally, ordering and payment process has been implemented through a contract with a payment gateway (Danal) company.",
  },
  {
    title: "NETFLIX",
    duration: "JUL - SEP 2022 / 2mo",
    preview: "/images/netflix_preview.png",
    time: "2mo",
    stack: ["React", "Redux"],
    github: "https://github.com/jinbokk/JB-NETFLIX",
    url: "https://netflix-jinbokk.netlify.app",
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
    description:
      "This is my first web development project, a news browsing website. Using the NewsCatcher API, I implemented a feature to browse news articles from various media outlets based on different categories. The website also features a responsive web design.",
  },
];

export default function Project() {
  return (
    <>
      <section>
        <h1># some things i&apos;ve built</h1>

        {projectData.map((item, index) => {
          return (
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
                <p
                  className={`project-overline ${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  Personal Project<br></br>
                  {item.duration}
                </p>
                <a href={item.url} target="_blank" className="title-wrapper">
                  <h3
                    className={`${index % 2 === 0 ? "text-end" : "text-start"}`}
                  >
                    {item.title}
                  </h3>
                </a>
                <p
                  className={`description ${
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
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <a href={item.github} target="_blank" className="logo mx-2">
                    <GithubSimpleLogo />
                  </a>
                  <a href={item.url} target="_blank" className="logo mx-2">
                    <WebsiteClickLogo />
                  </a>
                  <div className="logo mx-2"></div>
                </div>
              </div>

              <div
                className={`relative w-1/2 ${
                  index % 2 === 0 ? "items-end left-20" : " right-20"
                }`}
              >
                <a
                  href={item.url}
                  target="_blank"
                  className="project-preview-image-top mx-2"
                >
                  <Image
                    src={item.preview}
                    alt=""
                    width={700}
                    height={700}
                    className="project-preview-image"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </section>

      <style jsx>
        {`
          .title-wrapper {
            transition: 0.3s;
          }

          .title-wrapper:hover {
            color: var(--highlight-color);
            transition: 0.3s;
          }

          .description {
            background-color: var(--highlight-color-dark);
            color: white;
            box-shadow: rgba(0, 0, 0) 0px 4px 12px;
            padding: 1rem;
            position: relative;
            z-index: 2;
          }

          .project-overline {
            color: var(--highlight-color);
          }

          .project-preview-image-top {
            position: relative;
            display: block;
            width: fit-content;
            height: fit-content;
            margin: 0;
            z-index: 1;
          }

          .project-preview-image-top:hover::before {
            background-color: transparent;
            transition: 0.3s;
          }

          .project-preview-image-top::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: gray;
            mix-blend-mode: multiply;
            transition: 0.3s;
          }

          .project-preview-image {
            opacity: 0.5;
          }

          .stack-wrapper {
            display: flex;
            margin: 0.6rem 0;
          }

          .logo {
            cursor: pointer;
            transition: 0.2s;
          }

          .logo:hover {
            color: var(--highlight-color);
            transition: 0.2s;
          }
        `}
      </style>
    </>
  );
}
