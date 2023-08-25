export default function Footer() {
  return (
    <div className="text-sm opacity-80 text-center pb-[50px] py-[100px]">
      Coded in Visual{" "}
      <a
        className="opacity-50 hover:opacity-100 duration-300"
        href="https://code.visualstudio.com/"
        target="_blank"
      >
        Studio Code
      </a>{" "}
      by yours truly. Built with{" "}
      <a
        className="opacity-50 hover:opacity-100 duration-300"
        href="https://nextjs.org/"
        target="_blank"
      >
        Next.js
      </a>{" "}
      and{" "}
      <a
        className="opacity-50 hover:opacity-100 duration-300"
        href="https://tailwindcss.com/"
        target="_blank"
      >
        Tailwind CSS
      </a>
      , deployed with{" "}
      <a
        className="opacity-50 hover:opacity-100 duration-300"
        href="https://vercel.com/"
        target="_blank"
      >
        Vercel
      </a>
      <br></br>
      <div className="pt-3">
        Designed & Built by{" "}
        <a
          className="text-highlight opacity-50 hover:opacity-100 duration-300"
          href="https://github.com/jinbokk/portfolio-v1"
          target="_blank"
        >
          Jinbok Lee
        </a>
      </div>
    </div>
  );
}
