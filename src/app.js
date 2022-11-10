import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { SavingsForm } from "./components/SavingsForm/SavingsForm";
import DebtForm from "./components/DebtForm/DebtForm";
import { Box, Stack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

function App() {
  const [component, setComponent] = useState("SAVINGS");
  // const [date, setDate] = useState(new Date());
  // const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  // const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isSmallScreen] = useMediaQuery("(min-width: 768px)");

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
    <>
      <Stack>
        {isSmallScreen ? "larger than 768px" : "smaller than 786px"}
      </Stack>
      <Box
        minW={isSmallScreen}
        minH={"calc(100vh)"}
        pb={40}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        display={{ md: "flex" }}
        flexDirection="column"
        alignItems="center"
        backgroundColor={"black"}
      >
        <Header backgroundColor={"#ffc8dd"} />
        <Navigation setComponent={setComponent} />
        {renderForm()}
      </Box>
    </>
  );
}

export default App;
