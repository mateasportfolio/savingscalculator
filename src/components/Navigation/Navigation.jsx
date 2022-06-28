import React from "react";
import "./style.css";

const Navigation = ({ setComponent }) => {
  return (
    <div className="nav">
      <span className="nav__btn" onClick={() => setComponent("SAVINGS")}>
        Lifetime Savings
      </span>
      <span className="nav__btn" onClick={() => setComponent("DEBT_PAYOFF")}>
        Debt Payoff
      </span>
    </div>
  );
};
export default Navigation;
