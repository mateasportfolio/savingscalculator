import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const DebtForm = () => {
  const [startingDebt, setStartingDebt] = useState(3000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(300);

  return (
    <div className="debt-form">
      <Box
        // fontSize={{ base: "24px", md: "40px", lg: "56px" }}
        w="400px"
        bgGradient="linear(to-l, #FFCEE6, #EF87BE)"
        borderRadius="10px 10px 0 0"
      >
        <FormControl m={1} p={2}>
          <FormLabel
            letterSpacing={1}
            fontSize="m"
            color="black"
            as="b"
            textShadow="5px 5px 10px white"
            p={6}
            fontWeight="extrabold"
          >
            Starting debt:
          </FormLabel>
          <Input
            type="number"
            variant="flushed"
            name="starting-Debt"
            size="lg"
            m="2px"
            p={2}
            value={startingDebt}
            onChange={(e) => setStartingDebt(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel
            letterSpacing={1}
            fontSize="m"
            color="black"
            as="b"
            textShadow="5px 5px 10px white"
            p={6}
            fontWeight="extrabold"
          >
            Average Monthly installment:
          </FormLabel>
          <Input
            type="number"
            variant="flushed"
            name="starting-Debt"
            size="lg"
            m="2px"
            p={2}
            value={monthlyInstallment}
            onChange={(e) => setMonthlyInstallment(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel
            letterSpacing={1}
            fontSize="m"
            color="black"
            as="b"
            textShadow="5px 5px 10px white"
            p={6}
            fontWeight="extrabold"
          >
            Your debt will be paid off in{" "}
            {Math.ceil(startingDebt / monthlyInstallment)} months{" "}
            {(e) => setMonthlyInstallment(e.target.value)}
            {""}
          </FormLabel>
        </FormControl>
      </Box>
    </div>
  );
};

export default DebtForm;
