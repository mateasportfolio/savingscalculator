import React from "react";
import "./style.css";
import { data } from "./data";
import { Section } from "../../components/Section/Section";
import diagrammm from "../../assets/diagrammm.svg";
import { Code } from "@chakra-ui/react";
import lottie from "lottie-web";
import Animation from "./codeanimation.json";
import { useEffect, useRef } from "react";

export const CodePage = () => {
  const list = data.map((item) => <Section item={item} key={item.id} />);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: Animation,
    });
  }, []);
  return (
    <div className="code-page">
      {list};
      <div className="first-img">
        <div ref={container}></div>
        <img src={diagrammm} className="first-img" alt="first-img" />
      </div>
    </div>
  );
};

export default Code;
