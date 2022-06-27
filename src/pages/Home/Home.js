import React from "react";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as FreecodecampIcon } from "../../assets/freecodecamp.svg";
import { ReactComponent as NetlifyIcon } from "../../assets/netlify.svg";
import { ReactComponent as EpekworksIcon } from "../../assets/epekworksicon.svg";
import Aura from "../../assets/Aura.jpeg";
import "./style.css";
import { Box } from "@chakra-ui/react";
import lottie from "lottie-web";
import Animation from "./Animation.json";

import { useEffect, useRef } from "react";

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: Animation,
    });
  }, []);

  return (
    <div className="home-page">
      <div className="main-box">
        <img src={Aura} className="aura-img" alt="main-img" />
        <div className="info">
          <h1>Welcome</h1>
          <p>
            I’m<b> Matea</b>
          </p>
          <p>
            I'm a future Mediadesigner / Webdesigner,I am having an Internship
            at
            <b> epekworks.com.</b>
          </p>
          <p>
            Im a <b>Free Spirit</b> ,interested into <b>Art</b>,learning{" "}
            <b>new Skills and Technology.</b>
          </p>
        </div>

        <Box>
          <div className="icons">
            <div className="link">
              <a
                href="https://epekworks.com/project/53a049fc-779b-4841-a540-0b22a9740174"
                target="_blank"
                rel="noreferrer"
              >
                <EpekworksIcon />
              </a>
            </div>

            <div className="link">
              <a
                href="https://www.freecodecamp.org/matea"
                target="_blank"
                rel="noreferrer"
              >
                <FreecodecampIcon />
              </a>
            </div>

            <div className="link">
              <a
                href="https://dulcet-tiramisu-8b2b08.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <NetlifyIcon />
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.linkedin.com/in/matea-tabak-83440a230/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </Box>

        <div ref={container} paddingbottom={10}></div>
      </div>
    </div>
  );
};

export default Home;
