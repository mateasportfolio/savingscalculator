import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";
import DebtForm from "./components/DebtForm/DebtForm";
import { Box } from "@chakra-ui/react";

function App() {
  const [component, setComponent] = useState("SAVINGS");
  // const [date, setDate] = useState(new Date());

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
    <Box
      minH={"calc(100vh)"}
      pb={40}
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor={"black"}
    >
      <Header backgroundColor={"#ffc8dd"} />
      <Navigation setComponent={setComponent} />
      {renderForm()}
    </Box>
  );
}

export default App;
