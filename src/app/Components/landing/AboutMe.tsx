import Image from "next/image";
import profilePic from "public/images/profile_image_1.png";

export default function AboutMe() {
  return (
    <section>
      <h1># about me</h1>
      <div className="flex justify-around items-center">
        <div className="basis-2/3">
          <h2>
            Hello! My name is Jinbok.<br></br>I have a passion for developing
            software that brings value to people&apos;s lives.<br></br>
            Embarrassingly, I couldn&apos;t easily answer the question of
            &quot;What do I really want to do in the future?&quot; for a while.
            <br></br>
            <br></br>
            However, through my experiences, I&apos;ve contemplated what truly
            interests me, and I made up my mind to become a developer. I aspire
            to grow as a frontend developer, working closely with people to
            create meaningful experiences.<br></br>
            <br></br>Recently, I launched a website for my sister&apos;s cake
            workshop using the MERN stack.<br></br>I am currently studying
            TypeScript and Next.js!
          </h2>
        </div>

        {/* <div className="before:block before:absolute before:top-0 before:left-0 before:bg-red-500 before:w-full before:h-full basis-1/3 p-20"> */}
        <div className="basis-1/3 p-20">
          <Image src={profilePic} alt="profilePic" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
