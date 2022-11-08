import React, { useState, useEffect } from "react";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";

export const SavingsForm = () => {
  const [startingBalance, setstartingBalance] = useState(1000);
  const [avgMonthlyIncome, setAvgMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [endDate, setEndDate] = useState(new Date());

  const handleEndDateChange = (date) => {
    setEndDate(new Date(date));
    let currentDate = new Date();
    let years = endDate.getFullYear() - currentDate.getFullYear();
    let months = endDate.getMonth() - currentDate.getMonth();
    setTotalMonths(months + years * 12);

    console.log(totalMonths);
  };

  const calculateEverything = () => {
    const sum =
      (avgMonthlyIncome - monthlyExpenses) * totalMonths +
      parseInt(startingBalance);
    setTotalSavings(sum);
  };

  useEffect(() => {
    calculateEverything();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startingBalance, avgMonthlyIncome, monthlyExpenses, totalMonths]);

  return (
    <Box
      h="400px"
      w="400px"
      border="1px solid pink"
      borderRadius="10px"
      p="20px"
      m="auto"
      mt="30px"
    >
      <FormControl>
        <FormLabel>Starting Balance:</FormLabel>
        <Input
          name="starting-balance"
          size="sm"
          value={startingBalance}
          onChange={(e) => setstartingBalance(e.target.value)}
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Average Monthly Income (after taxes):</FormLabel>
        <TriangleUpIcon
          w={8}
          h={8}
          margin-left="16px"
          color="green"
          flexShrink={0}
          display="flex"
          flexWrap="wrap"
          verticalAlign=" left"
          webkit-align-items="center"
        />
        <Input
          name="avg-monthly-income"
          size="sm"
          value={avgMonthlyIncome}
          handleEndDateChange
          onChange={(e) => setAvgMonthlyIncome(e.target.value)}
          type="number"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Average Monthly Expenses:</FormLabel>
        <TriangleDownIcon
          w={8}
          h={8}
          color="red"
          flexShrink={0}
          display="inline-block"
          flexWrap="wrap"
          verticalAlign="left"
          webkit-align-items="center"
        />

        <Input
          name="monthly-expenses"
          size="sm"
          value={monthlyExpenses}
          onChange={(e) => setMonthlyExpenses(e.target.value)}
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>
          Projected financial outlook on :
          <Input
            placeholder="Select Date and Time"
            size="sm"
            type="datetime-local"
            onChange={handleEndDateChange}
          />
          {/* <input
            type="month"
            id="endDate"
            min="2021-06"
            defaultValue="2030-12"
            onChange={handleEndDateChange}
          /> */}
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel>Your savings will be {totalSavings}</FormLabel>
      </FormControl>
    </Box>
  );
};

export default SavingsForm;
