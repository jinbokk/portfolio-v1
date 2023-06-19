"use client";

import { useRouter } from "next/navigation";

interface projectItem {
  projectName: string;
  projectDescription: string;
  imageURL: string;
  path: string;
}

export default function ProjectGraph() {
  const router = useRouter();

  const projects: projectItem[] = [
    {
      projectName: "THE JINBOK TIMES",
      projectDescription: "Newscatcher API를 사용한 뉴스 브라우징 웹 서비스",
      imageURL: "/images/card-the-jinbok-times.png",
      path: "/projects/the-jinbok-times",
    },
    {
      projectName: "MUSICOR",
      projectDescription: "Sportify API를 사용한 컬러별 음악 추천 웹 서비스",
      imageURL: "/images/card-musicor.png",
      path: "/projects/musicor",
    },
    {
      projectName: "NETFLIX",
      projectDescription: "TMDB API를 사용한 NETFLIX 클론 코딩",
      imageURL: "/images/card-netflix.png",
      path: "/projects/netflix",
    },
    {
      projectName: "EESO CAKE",
      projectDescription:
        "친누나가 운영 중인 주문제작 케이크 공방의 e-commerce 서비스",
      imageURL: "/images/card-eeso-cake.png",
      path: "/projects/eeso-cake",
    },
  ];

  return (
    <>
      <div className="container-top">
        <div className="progress-bar"></div>
        <div className="project-card-container">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="project-card"
                style={{
                  backgroundImage: `url(${project.imageURL})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
                onClick={() => {
                  router.push(project.path);
                }}
              >
                {/* <div>{project.projectName}</div> */}
                <div className="project-description">
                  {project.projectDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .container-top {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 70%;
        }

        .progress-bar {
          width: 100%;
          height: 2px;
          background-color: white;
          margin-top: 30px;
          margin-bottom: 15px;
        }

        .project-card-container {
          display: flex;
          height: 80%;
        }

        .project-card {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.3);
          transition: 0.7s; /* 확대/축소 애니메이션을 위한 트랜지션 속성 */
          cursor: pointer;
          margin: 5px;
          border-radius: 10px;
          position: relative;
        }

        .project-card:nth-child(1) {
          flex-basis: 10%; /* 첫 번째 이미지의 초기 너비 */
        }

        .project-card:nth-child(2) {
          flex-basis: 10%; /* 두 번째 이미지의 초기 너비 */
        }

        .project-card:nth-child(3) {
          flex-basis: 20%; /* 세 번째 이미지의 초기 너비 */
        }

        .project-card:nth-child(4) {
          flex-basis: 40%; /* 세 번째 이미지의 초기 너비 */
        }

        .project-card:hover {
          flex-grow: 10; /* 호버된 이미지를 크게 만듦 */
          transition: 0.5s;
        }

        .project-card:not(:hover) {
          flex-grow: 1; /* 나머지 이미지들을 작게 만듦 */
          transition: 0.5s;
        }

        .project-description {
          position: absolute;
          bottom: -40px;
          opacity: 0;
          transition: 0.3s;
          white-space: nowrap;
        }

        .project-card:hover > .project-description {
          opacity: 1;
          transition: 0.3s;
        }
      `}</style>
    </>
  );
}
