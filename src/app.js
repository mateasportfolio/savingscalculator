import { useState } from "react";
import "./app.css";
import Navigation from "./components/Navigation/Navigation.jsx";
function App() {
  const [component, setComponent] = useState("SAVINGS");
  /*
  const renderForm = () => {
    switch (component) {
      case "SAVINGS":
        return <SavingsForm />;
      case "DEBT_PAYOFF":
        return <DebtForm />;
      default:
        return <SavingsForm />;
    }
  };*/

  return (
    <div className="App">
      {/* Header */}
      {/* Psudeo Navigation */}
      <Navigation setComponent={setComponent} />
      {/* Rendered Form */}
      {/*{renderForm()} */}
    </div>
  );
}

export default App;
