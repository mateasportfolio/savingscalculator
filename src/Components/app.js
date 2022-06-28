import { useState } from "react";
import "./App.css";
import DebtForm from "./components/DebtForm/DebtForm";
import { Navigation } from "./components/Navigation/Navigation";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";

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
      {/* Header */}
      {/* Psudeo Navigation */}
      <Navigation setComponent={setComponent} />
      {/* Rendered Form */}
      {renderForm()}
    </div>
  );
}

export default App;
