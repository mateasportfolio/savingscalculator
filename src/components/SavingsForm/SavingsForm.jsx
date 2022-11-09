import React, { useState, useEffect } from "react";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";

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
    <Box
      bg="blue.200"
      h="600%vh"
      w="450"
      border="10px solid pink"
      borderRadius="10px"
      p={4}
      m={1}
    >
      <FormControl m={1} p={2}>
        <FormLabel p={1}>Starting Balance:</FormLabel>
        <Input
          p={2}
          name="starting-balance"
          size="sm"
          value={startingBalance}
          onChange={(e) => setStartingBalance(e.target.value)}
          type="number"
        />
      </FormControl>
      <FormControl m={1} p={2}>
        <FormLabel p={1}>Average Monthly Income (after taxes):</FormLabel>
        <TriangleUpIcon w={6} h={8} margin-left="16px" color="green" />
        <Input
          p={2}
          name="avg-monthly-income"
          size="sm"
          value={avgMonthlyIncome}
          onChange={(e) => setAvgMonthlyIncome(e.target.value)}
          type="number"
        />
      </FormControl>

      <FormControl m={1} p={2}>
        <FormLabel p={1}>Average Monthly Expenses:</FormLabel>
        <TriangleDownIcon w={6} h={8} color="red" />

        <Input
          p={2}
          name="monthly-expenses"
          size="sm"
          value={monthlyExpenses}
          onChange={(e) => setMonthlyExpenses(e.target.value)}
          type="number"
        />
      </FormControl>
      <FormControl m={1} p={2}>
        <FormLabel p={1}>Projected financial outlook on: </FormLabel>
        <Input
          p={2}
          placeholder="Select Date and Time"
          size="sm"
          type="datetime-local"
          onChange={(e) => handleEndDateChange(e.target.value)}
        />
      </FormControl>
      <FormControl m={1} p={2}>
        <FormLabel>Your savings will be {totalSavings}</FormLabel>
      </FormControl>
    </Box>
  );
};

export default SavingsForm;
