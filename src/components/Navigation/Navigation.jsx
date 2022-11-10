import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import React from "react";

const Navigation = ({ setComponent }) => {
  // eslint-disable-next-line
  const breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };
  return (
    <HStack spacing={2} p="2px" mr="10px">
      <Box
        p="20px"
        onClick={() => setComponent("SAVINGS")}
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
      >
        <Button variant="ghost">
          <Heading as="h5" size="xl" textColor="white">
            Lifetime Savings
          </Heading>
        </Button>
      </Box>{" "}
      <Box
        onClick={() => setComponent("DEBT_PAYOFF")}
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
      >
        <Button variant="ghost" colorScheme="pink">
          <Heading textColor="white" as="h5" size="xl">
            Debt Payoff{" "}
          </Heading>
        </Button>
      </Box>{" "}
    </HStack>
  );
};
export default Navigation;
