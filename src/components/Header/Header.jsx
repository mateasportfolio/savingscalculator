import React from "react";
import "./style.css";
import { logo } from "../../assets";

function Header() {
  return (
    <div className="Header">
      <div className="logo_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-container">
        <h2 className="header_title">Savings Calculator</h2>
        <h4 className="header_subtitle">Calculate Your Financial Outlook</h4>
      </div>
    </div>
  );
}

export default Header;
