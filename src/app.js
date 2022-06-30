import React, { useState } from "react";
import "./app.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";
import DebtForm from "./components/DebtForm/DebtForm";

function App() {
  const [component, setComponent] = useState("SAVINGS");

  const renderForm = () => {
    switch (component) {
      case "SAVINGS":
        return <SavingsForm />;
      case "DEBT_PAYOFF":
        return <DebtForm />;
      default:
        return <SavingsForm />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation setComponent={setComponent} />
      {renderForm()}
    </div>
  );
}

export default App;
