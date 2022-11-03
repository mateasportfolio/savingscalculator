import React from "react";
import "./style.css";
import { logo } from "../../assets";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

function Header() {
  return (
    <Flex color="blue" border="1px" height="80px" w="100%" padding="10px">
      <Box h="60px" w="60px">
        <img src={logo} alt="logo" />
      </Box>
      <Stack>
        <Heading as="h2" color="white" marginLeft="10px">
          Savings Calculator
        </Heading>
        <Heading as="h4" color="white" marginLeft="10px">
          Calculate Your Financial Outlook
        </Heading>
      </Stack>
    </Flex>
  );
}

export default Header;
