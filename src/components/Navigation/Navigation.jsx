import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Navigation = ({ setComponent }) => {
  return (
    <HStack spacing={40} mb="10px">
      <Box
        p="20px"
        m="30px"
        color="white.500"
        onClick={() => setComponent("SAVINGS")}
      >
        <Text as="b" bg="purple.100">
          Lifetime Savings
        </Text>
      </Box>{" "}
      <Box p="20px" m="30px" onClick={() => setComponent("DEBT_PAYOFF")}>
        <Text bg="purple.100" as="b">
          {" "}
          Debt Payoff{" "}
        </Text>
      </Box>{" "}
    </HStack>
  );
};
export default Navigation;
