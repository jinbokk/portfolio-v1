export default function Splash() {
  <>
    <svg viewBox="0 0 1320 300" className="svgContainer">
      <text dy=".35em" text-anchor="middle" fill="white">
        JB
      </text>
    </svg>

    <style jsx>
      {`
         {
          .svgContainer {
            font-family: "Russo One", sans-serif;
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .svgContainer text {
            text-transform: uppercase;
            animation: stroke 4s;
            stroke-width: 2;
            stroke: rgb(255, 255, 255);
            font-size: 140px;
          }

          @keyframes stroke {
            0% {
              fill: rgb(255, 255, 255, 0);
              stroke: rgb(255, 255, 255);
              stroke-dashoffset: 25%;
              stroke-dasharray: 0 50%;
              stroke-width: 2;
            }
            70% {
              fill: rgb(255, 255, 255, 0);
              stroke: rgb(255, 255, 255);
            }
            80% {
              fill: rgb(255, 255, 255, 0);
              stroke: rgb(255, 255, 255);
              stroke-width: 3;
            }
            100% {
              fill: rgb(255, 255, 255);
              stroke: rgb(255, 255, 255);
              stroke-dashoffset: -25%;
              stroke-dasharray: 50% 0;
              stroke-width: 0;
            }
          }
        }
      `}
    </style>
  </>;
}
