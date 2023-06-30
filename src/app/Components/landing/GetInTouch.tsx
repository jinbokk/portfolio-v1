export default function GetInTouch() {
  return (
    <>
      <section>
        <h1># what is next ?</h1>
        <h2 className="w-full text-center">Get In Touch</h2>

        <p className="w-full text-center">
          Thanks for taking the time to review my portfolio !
        </p>
        <p className="w-full text-center">
          I&apos;m a fresh software developer, ready to put my effort for the job.
        </p>
        <p className="w-full text-center">
          I&apos;m eager to seize any chances to grow and expand my skills.
        </p>
        <p className="w-full text-center">
          If you have any questions or simply want to connect, feel free to
          reach out to me !
        </p>
        <p className="w-full text-center"></p>

        <a
          href="mailto:eyelash1024@naver.com"
          className="email-link mx-auto my-20"
        >
          Say Hello
        </a>
      </section>

      <style jsx>
        {`
          .email-link {
            color: var(--highlight-color);
            background-color: transparent;
            border: 1px solid var(--highlight-color);
            border-radius: 5px;
            padding: 1.25rem 1.75rem;
            font-size: 2rem;
            font-family: var(--font-roboto-mono);
            line-height: 1;
            text-decoration: none;
            transition: 0.3s;
            margin-top: 50px;
          }

          .email-link:hover,
          .email-link:focus-visible {
            outline: none;
            box-shadow: 4px 4px 0 0 var(--highlight-color);
            transform: translate(-5px, -5px);
          }
        `}
      </style>
    </>
  );
}
