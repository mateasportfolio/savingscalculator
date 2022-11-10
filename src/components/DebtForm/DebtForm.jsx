import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const DebtForm = () => {
  const [startingDebt, setStartingDebt] = useState(3000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(300);

  return (
    <Box w="400px">
      <Box
        w="400px"
        bgGradient="linear(to-l, #FFCEE6, #EF87BE)"
        borderRadius="10px 10px 0 0"
      >
        <FormControl m={1} p={2} h="100px">
          <FormLabel>
            <Text p={1} letterSpacing={1} fontSize="30px" color="black" as="b">
              Debt Calculator
            </Text>
          </FormLabel>
        </FormControl>

        <FormControl m={1} p={2}>
          <FormLabel
            letterSpacing={1}
            fontSize="m"
            color="black"
            as="b"
            p={1}
            fontWeight="medium"
          >
            Starting debt:
          </FormLabel>
          <Input
            type="number"
            variant="flushed"
            name="starting-Debt"
            size="lg"
            m={2}
            p={1}
            value={startingDebt}
            onChange={(e) => setStartingDebt(e.target.value)}
          />
        </FormControl>
        <FormControl p={2} h="100px">
          <FormLabel
            letterSpacing={1}
            fontSize="m"
            color="black"
            as="b"
            p={1}
            fontWeight="medium"
          >
            Average Monthly installment:
          </FormLabel>
          <Input
            type="number"
            variant="flushed"
            name="starting-Debt"
            size="l"
            m="2px"
            p={2}
            value={monthlyInstallment}
            onChange={(e) => setMonthlyInstallment(e.target.value)}
          />
        </FormControl>
      </Box>

      <Box bg="white" borderRadius="0 0 10px 10px" h="100px" p="10px">
        <FormControl>
          <FormLabel
            letterSpacing={1}
            fontSize="m"
            color="black"
            as="b"
            textShadow="5px 5px 10px white"
            p={6}
            fontWeight="medium"
          >
            Your debt will be paid off in{" "}
            {Math.ceil(startingDebt / monthlyInstallment)} months{" "}
            {(e) => setMonthlyInstallment(e.target.value)}
            {""}
          </FormLabel>
        </FormControl>
      </Box>
    </Box>
  );
};

export default DebtForm;
