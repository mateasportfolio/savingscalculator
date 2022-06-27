import React from "react";
import "./style.css";

export const Section = ({ item }) => {
  return (
    <div className="section">
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
};
export default Section;
