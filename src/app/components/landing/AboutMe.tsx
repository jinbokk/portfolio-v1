import Image from "next/image";
import profilePic from "/public/images/profile_image_1.png";
import ThreeJS from "./ThreeJS";

export default function AboutMe() {
  return (
    <section id="about">
      <h1>
        <span className="text-highlight">#</span> About me
      </h1>
      <div className="flex flex-wrap w-full h-max justify-around items-center">
        <div className="max-w-3xl md:max-w-2xl">
          <h2>
            Hello! My name is Jinbok.<br></br>I have a passion for developing
            software that brings value to people&apos;s lives.<br></br>
            Embarrassingly, I couldn&apos;t easily answer the question of
            &quot;What do I really want to do in the future?&quot; for a while.
            <br></br>
            <br></br>
            However, through my experiences, I&apos;ve contemplated what truly
            interests me, and I made up my mind to become a developer. I aspire
            to grow as a SOFTWARE ENGINEER, working closely with people to
            create meaningful experiences.<br></br>
            <br></br>Recently, I launched a website for cake workshop using the
            MERN stack.<br></br>I am currently studying TypeScript, Next.js and
            <span className="font-bold mx-2">THREE.JS !</span>
          </h2>
        </div>

        <div className="relative m-10">
          <div
            className="
            aspect-3/4
            h-80
            duration-300
            hover:-translate-x-1 hover:-translate-y-1
            
            before:z-10 before:block before:absolute before:top-0 before:left-0
            before:bg-highlight before:w-full before:h-full before:mix-blend-multiply before:rounded-xl
            before:duration-300 hover:before:opacity-0

            after:-z-10 after:block after:absolute after:top-3 after:left-3
            after:border-2 after:border-highlight after:w-full after:h-full after:rounded-xl
            hover:after:translate-x-2 hover:after:translate-y-2 after:duration-300
           "
          >
            <Image
              priority
              src={profilePic}
              alt="profilePic"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[40vh] mt-10 border-4 border-gray rounded-3xl"><ThreeJS /></div>
    </section>
  );
}
