import { Dispatch, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({
  setIsLoading,
}: {
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const splashContainerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const splashContainer = splashContainerRef.current;

    const handleAnimationEnd = () => {
      setIsLoading(false);
    };

    if (splashContainer) {
      splashContainer.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (splashContainer) {
        splashContainer.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <>
      <div className="splash_container" ref={splashContainerRef}>
        <div className={`splash_logo ${isAnimationComplete ? "filled" : ""}`}>
          <motion.svg
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            onAnimationComplete={() => setIsAnimationComplete(true)}
            viewBox="0 0 679 588"
            style={{ width: "300px", height: "300px" }}
          >
            <motion.g
              transform="translate(0,588) scale(0.1,-0.1)"
              strokeWidth={50}
            >
              <motion.path
                variants={pathVariants}
                d="M848 4410 l-848 -1470 848 -1470 847 -1469 1700 0 1700 0 847 1469
                    848 1470 -848 1470 -847 1469 -1700 0 -1700 0 -847 -1469z m4914 -105 l788
                    -1365 -788 -1365 -787 -1364 -1580 0 -1580 0 -787 1364 -788 1365 788 1365
                    787 1364 1580 0 1580 0 787 -1364z"
              />
              <motion.path
                variants={pathVariants}
                d="M2280 3845 l0 -115 455 0 455 0 0 -719 c0 -403 -4 -740 -9 -767 -19
                    -100 -52 -166 -110 -225 -78 -78 -141 -101 -288 -107 -134 -5 -214 15 -308 76
                    -58 37 -152 130 -187 182 l-16 25 -88 -86 -87 -87 33 -47 c71 -103 199 -207
                    311 -252 119 -48 176 -58 329 -57 164 0 238 15 359 70 l74 34 376 0 c213 0
                    415 5 466 11 340 42 565 214 620 474 40 190 3 373 -99 491 -69 80 -218 158
                    -343 179 -24 4 -43 10 -43 14 0 4 25 15 55 26 226 76 354 297 317 547 -37 257
                    -226 401 -572 438 -55 5 -434 10 -897 10 l-803 0 0 -115z m1744 -134 c186 -49
                    256 -137 256 -322 0 -118 -23 -181 -90 -243 -97 -91 -189 -113 -497 -122
                    l-223 -7 0 363 0 363 238 -6 c196 -4 251 -9 316 -26z m36 -914 c126 -29 181
                    -56 246 -121 80 -80 99 -134 98 -266 -1 -71 -7 -109 -23 -152 -30 -79 -103
                    -157 -183 -195 -112 -55 -185 -66 -470 -71 l-258 -4 0 417 0 418 263 -6 c179
                    -4 283 -10 327 -20z"
              />
            </motion.g>
          </motion.svg>
        </div>
      </div>

      <style jsx>
        {`
          .splash_container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }

          .splash_logo {
            stroke: rgb(255, 255, 255);
            transition: all 0.7s ease-in-out;
            animation: slide-up 0.5s ease-out forwards;
            animation-delay: 3.5s;
            fill: var(--main-bg-color);
          }

          .filled {
            fill: white;
            transform: scale(0.4);
          }

          @keyframes slide-up {
            0% {
              transform: scale(0.4);
              opacity: 1;
            }

            40% {
              transform: scale(0.6);
              opacity: 1;
            }

            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
