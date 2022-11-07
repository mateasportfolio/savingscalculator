import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";
import DebtForm from "./components/DebtForm/DebtForm";
import { Box } from "@chakra-ui/react";
import { Calendar } from "react-calendar";

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
      <Header />

      <Navigation setComponent={setComponent} />
      {renderForm()}
      <Calendar
        cursor="pointer"
        p="10px"
        mb="20px"
        onChange={setDate}
        value={date}
        minDetail="year"
        onClickDay={(day) => console.log(day)}
      />
    </Box>
  );
}

export default App;
