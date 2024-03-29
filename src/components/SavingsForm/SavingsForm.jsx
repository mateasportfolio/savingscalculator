import React, { useState, useEffect } from "react";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { Input, Text } from "@chakra-ui/react";

export const SavingsForm = () => {
  const [startingBalance, setStartingBalance] = useState(1000);
  const [avgMonthlyIncome, setAvgMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [endDate, setEndDate] = useState(new Date());

  const monthDiff = (d1, d2) => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  };

  const handleEndDateChange = (date) => {
    setEndDate(new Date(date));
    let currentDate = new Date();
    const months = monthDiff(currentDate, endDate);
    setTotalMonths(months);
  };

  const calculateEverything = () => {
    const totalIncome = avgMonthlyIncome * totalMonths;
    const totalExpenses = monthlyExpenses * totalMonths;
    const result = totalIncome - totalExpenses + parseInt(startingBalance);
    setTotalSavings(result);
  };

  useEffect(() => {
    calculateEverything();
    // eslint-disable-next-line
  }, [startingBalance, avgMonthlyIncome, monthlyExpenses, totalMonths]);

  return (
    <Box w="400px">
      <Box
        bgGradient="linear(to-l, #FFCEE6, #EF87BE)"
        borderRadius="10px 10px 0 0"
      >
        <FormControl m={1} p={2} h="100px">
          <FormLabel>
            <Text
              p={1}
              letterSpacing={1}
              fontSize="30px"
              color="black"
              as="b"
              // textShadow="5px 5px 10px white"
            >
              Starting Balance
            </Text>
          </FormLabel>

          <Input
            color="white"
            p={3}
            name="starting-balance"
            fontSize="l"
            value={startingBalance}
            onChange={(e) => setStartingBalance(e.target.value)}
            type="number"
            variant="flushed"
          />
        </FormControl>

        <FormControl m={1} p={2} h="100px">
          <FormLabel color="black" p={1} fontWeight="medium">
            Average Monthly Income (after taxes):
          </FormLabel>

          <Input
            color="white"
            p={2}
            name="avg-monthly-income"
            fontSize="l"
            value={avgMonthlyIncome}
            onChange={(e) => setAvgMonthlyIncome(e.target.value)}
            type="number"
            variant="flushed"
          />
        </FormControl>
        <FormControl m={1} p={2} h="100px">
          <FormLabel color="black" p={1}>
            Average Monthly Expenses:
          </FormLabel>

          <Input
            color="white"
            p={2}
            name="monthly-expenses"
            fontSize="l"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
            type="number"
            variant="flushed"
          />
        </FormControl>
        <FormControl p={2} h="100px">
          <FormLabel color="black" p={1}>
            Projected financial outlook on:{" "}
          </FormLabel>
          <Input
            p={2}
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2060-12-31"
            color="white"
            onChange={(e) => handleEndDateChange(e.target.value)}
            variant="flushed"
          />
        </FormControl>
      </Box>

      <Box bg="white" borderRadius="0 0 10px 10px" h="100px" p="10px">
        <FormControl>
          <FormLabel color="black" fontWeight="medium">
            Your savings will be
          </FormLabel>
          <FormLabel fontSize={30} color="#00FF00">
            ${totalSavings}
          </FormLabel>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SavingsForm;
