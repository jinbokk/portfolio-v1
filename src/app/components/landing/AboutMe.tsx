import Image from "next/image";
import profilePic from "/public/images/profile_image_1.png";
import ThreeJS from "./ThreeJS";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function AboutMe() {

  const images = [
    {
      dimension: "2d",
      title: "confetti",
    },
    {
      dimension: "2d",
      title: "countdown",
    },
    {
      dimension: "2d",
      title: "firework",
    },
    {
      dimension: "2d",
      title: "minigame",
    },
    {
      dimension: "2d",
      title: "rope-physics",
    },
    {
      dimension: "3d",
      title: "card",
    },
    {
      dimension: "3d",
      title: "cube",
    },
    {
      dimension: "3d",
      title: "origami-boat",
    },
    {
      dimension: "3d",
      title: "text",
    },
  ];

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
            <span className="font-bold mx-2 text-highlight">THREE.JS !</span>
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

      {/* <div className="w-full h-[40vh] mt-10 border-4 border-gray rounded-3xl"><ThreeJS /></div> */}

      <div className="w-full lg:px-20 mt-8">
        <div className="text-center">Click to view
          <a
            className="opacity-50 hover:opacity-100 duration-300"
            href="https://github.com/jinbokk/3D-study"
            target="_blank"
          >/ Visit Repository</a>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "rgb(16, 240, 221)",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "10px"
          }}
          breakpoints={
            {
              1391: {
                slidesPerView: 3
              }
            }
          }
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index} className="p-5 lg:mb-12 mb-8">
                <Image width={1000} height={500} priority src={`/images/threejs/${image.dimension}-${image.title}.png`} alt=""
                  className="peer cursor-pointer opacity-50 hover:opacity-100 hover:scale-105 transition ease-out duration-500" onClick={() => {
                    window.open(
                      `https://jinbokk-${image.dimension}-${image.title}.netlify.app/`
                    )
                  }} />
                <div className="w-full pt-4 tracking-wider text-md text-center opacity-50 peer-hover:text-highlight peer-hover:opacity-100 duration-200"><span className="me-1">#</span>{image.dimension} <span className="me-1">#</span>{image.title}</div>
              </SwiperSlide>
            )

          })}

        </Swiper>
      </div>

    </section >
  );
}
