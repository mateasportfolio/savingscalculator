import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const Navigation = ({ setComponent }) => {
  return (
    <HStack spacing={40} mB="10px">
      <Box color="white.500" onClick={() => setComponent("SAVINGS")}>
        Lifetime Savings
      </Box>{" "}
      <Box onClick={() => setComponent("DEBT_PAYOFF")}>Debt Payoff </Box>{" "}
    </HStack>
  );
};
export default Navigation;
