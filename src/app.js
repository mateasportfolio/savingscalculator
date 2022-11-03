import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";
import DebtForm from "./components/DebtForm/DebtForm";
import { Box } from "@chakra-ui/react";

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
    <Box h={"calc(100vh)"}>
      <Header />

      <Navigation setComponent={setComponent} />
      {renderForm()}
    </Box>
  );
}

export default App;
