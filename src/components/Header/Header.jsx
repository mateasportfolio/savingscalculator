import React from "react";
import { logo } from "../../assets";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

function Header() {
  return (
    <Flex height="80px" w="100%" p="10px">
      <Box h="60px" w="60px">
        <img src={logo} alt="logo" />
      </Box>
      <Stack marginLeft="20px">
        <Heading
          as="h2"
          size="lg"
          textColor="pink"
          textShadow="5px 5px 10px pink"
        >
          Savings Calculator
        </Heading>
        <Heading
          as="h4"
          size="md"
          textColor="white"
          textShadow="5px 5px 10px pink"
        >
          Calculate Your Financial Outlook
        </Heading>
      </Stack>
    </Flex>
  );
}

export default Header;
