import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Navigation = ({ setComponent }) => {
  return (
    <HStack spacing={40} mb={2}>
      <Box p={20} onClick={() => setComponent("SAVINGS")}>
        <Button size="sm" variant="outline">
          <Text textColor="white" as="m">
            Lifetime Savings
          </Text>
        </Button>
      </Box>{" "}
      <Box onClick={() => setComponent("DEBT_PAYOFF")}>
        <Button textColor="white" size="sm" variant="outline">
          <Text textColor="white" as="m">
            {" "}
            Debt Payoff{" "}
          </Text>
        </Button>
      </Box>{" "}
    </HStack>
  );
};
export default Navigation;
