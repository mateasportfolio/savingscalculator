import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";
import DebtForm from "./components/DebtForm/DebtForm";
import { Box } from "@chakra-ui/react";

function App() {
  const [component, setComponent] = useState("SAVINGS");
  // const { colorMode, toggleColorMode } = useColorMode();
  // return (
  //   <header>
  //     <Button onClick={toggleColorMode}>
  //       Toggle {colorMode === "light" ? "Dark" : "Light"}
  //     </Button>
  //   </header>
  // );

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
      <Header />
      <Navigation setComponent={setComponent} />
      {renderForm()}
    </Box>
  );
}

export default App;
