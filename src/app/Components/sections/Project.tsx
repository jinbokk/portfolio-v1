import Image from "next/image";

const projectData = [
  {
    title: "musicor",
    preview: "/images/musicor_preview.png",
    time: "2mo",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/jinbokk/MUSICOR",
    url: "https://musicor.netlify.app/",
    description:
      "This is a web application that recommends music based on the color selected by the user. Each color is associated with a specific concept and corresponding parameters such as tempo, energy, and danceability are pre-defined. The application utilizes the Spotify API to randomly recommend music that aligns with these parameters.",
  },
  {
    title: "musicor",
    preview: "/images/musicor_preview.png",
    time: "2mo",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/jinbokk/MUSICOR",
    url: "https://musicor.netlify.app/",
    description:
      "This is a web application that recommends music based on the color selected by the user. Each color is associated with a specific concept and corresponding parameters such as tempo, energy, and danceability are pre-defined. The application utilizes the Spotify API to randomly recommend music that aligns with these parameters.",
  },
  {
    title: "musicor",
    preview: "/images/musicor_preview.png",
    time: "2mo",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/jinbokk/MUSICOR",
    url: "https://musicor.netlify.app/",
    description:
      "This is a web application that recommends music based on the color selected by the user. Each color is associated with a specific concept and corresponding parameters such as tempo, energy, and danceability are pre-defined. The application utilizes the Spotify API to randomly recommend music that aligns with these parameters.",
  },
];

export default function Project() {
  return (
    <div>
      {projectData.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex justify-center items-center py-20 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex flex-col w-3/5 relative z-10 ${
                index % 2 === 0 ? "items-end right-20" : "left-20"
              }`}
            >
              <h2>Personal Project</h2>
              <h1 className={`${index % 2 === 0 ? "text-end" : "text-start"}`}>
                {item.title}
              </h1>
              <p
                className={`description ${
                  index % 2 === 0 ? "text-end" : "text-start"
                }`}
              >
                {item.description}
              </p>
              <div className="py-2">
                {item.stack.map((stack, stackIndex) => {
                  return (
                    <span key={stackIndex} className="mx-2">
                      {stack}
                    </span>
                  );
                })}
              </div>
            </div>

            <div
              className={`relative w-1/2 ${
                index % 2 === 0 ? "items-end left-20" : " right-20"
              }`}
            >
              <Image src={item.preview} alt="" width={700} height={700} />
            </div>
          </div>
        );
      })}

      <style jsx>
        {`
          .description {
            background-color: black;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
            padding: 1rem;
          }
        `}
      </style>
    </div>
  );
}
