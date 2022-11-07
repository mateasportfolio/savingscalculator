import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";
import DebtForm from "./components/DebtForm/DebtForm";
import { Box } from "@chakra-ui/react";
import Calendar from "react-calendar";
// import { useColorMode } from "react";

function App() {
  const [component, setComponent] = useState("SAVINGS");
  const [date, setDate] = useState(new Date());
  // const { colorMode, toggleColorMode } = useColorMode();

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
      h={"calc(100vh)"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      ; */}
      <Header />
      <Calendar onChange={setDate} value={date} selectRange={true} size="sm" />
      <Navigation setComponent={setComponent} />
      {renderForm()}
    </Box>
  );
}

export default App;
