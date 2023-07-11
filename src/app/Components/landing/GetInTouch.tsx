import DevGroup from "@animation/DevGroup";

export default function GetInTouch() {
  return (
    <>
      <section id="contact" className="overflow-hidden">
        <h1>
          <span className="text-highlight">#</span> What&apos;s next ?
        </h1>

        <div className="relative flex flex-col justify-center items-center mx-auto py-20">
          <h2 className="w-full text-center text-5xl font-bold tracking-wide text-highlight my-10 font-incon">
            Get In Touch
          </h2>

          <p className="opacity-80 font-inter w-3/4 text-center leading-loose text-sm lg:text-lg lg:leading-loose lg:max-w-[1000px] ">
            Thanks for taking the time to review my portfolio, I&apos;m a fresh
            software developer, ready to put my effort for the job. I&apos;m
            eager to seize any chances to grow and expand my skills. If you have
            any questions or simply want to connect, feel free to reach out to
            me.
          </p>

          <a
            href="mailto:eyelash1024@naver.com"
            className="text-xl text-highlight bg-background border border-highlight rounded-md mt-12 px-6 py-3
            hover:shadow-[4px_4px_0_0_rgb(16,240,221)] hover:-translate-x-1 hover:-translate-y-1 duration-300"
          >
            Say Hello
          </a>

          <div
            className="absolute -z-50 opacity-30 scale-[3]
          lg:bottom-10"
          >
            <DevGroup />
          </div>
        </div>
      </section>
    </>
  );
}
