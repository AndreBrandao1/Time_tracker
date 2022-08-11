import Head from "next/head";
import Image from "next/image";
import { Activities } from "../components/Activities";
import { User } from "../components/User";

export default function Home() {
  return (
    <>
      <div className="container">
        <User className="user"></User>
        <Activities className="work"></Activities>
        <Activities className="play"></Activities>
        <Activities className="study"></Activities>
        <Activities className="exercise"></Activities>
        <Activities className="social"></Activities>
        <Activities className="selfcare"></Activities>
      </div>

      <style jsx>
        {`
          .container {
            width: 80vw;
            height: 100px;
            display: grid;
            gap: 20px;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-areas:
              "a b c d"
              "a e f g";
          }

          .user {
            grid-area: a;
          }

          .work {
            grid-area: b;
          }

          .play {
            grid-area: c;
          }

          .study {
            grid-area: d;
          }

          .exercise {
            grid-area: e;
          }

          .social {
            grid-area: f;
          }

          .selfcare {
            grid-area: g;
          }
        `}
      </style>
    </>
  );
}
