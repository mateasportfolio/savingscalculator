import React from "react";
import "./style.css";
import { data } from "./data";
import diagrammm2 from "../../assets/diagrammm2.svg";
import Section from "../../components/Section/Section";

export const HostingPage = () => {
  const list = data.map((item) => <Section item={item} key={item.id} />);
  return (
    <div className="hosting-page">
      {list}

      <div className="diagramm2">
        <img src={diagrammm2} className="diagramm" alt="second-img" />
        <br /> <b></b>
      </div>
    </div>
  );
};

export default HostingPage;
