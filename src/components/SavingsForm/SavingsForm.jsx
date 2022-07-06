import React, { useState, useEffect } from "react";
import "./style.css";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const SavingsForm = () => {
  const [startingBalance, setstartingBalance] = useState(3000);
  const [avgMonthlyIncome, setAvgMonthlyIncome] = useState(1000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(500);
  const [totalMonths, setTotalMonths] = useState(120);
  const [totalSavings, setTotalSavings] = useState(1000);
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
      (avgMonthlyIncome - monthlyExpenses) * totalMonths + +startingBalance;
    setTotalSavings(sum);
  };

  useEffect(() => {
    calculateEverything();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startingBalance, avgMonthlyIncome, monthlyExpenses, totalMonths]);

  return (
    <div className="savings-form">
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
        <Input
          name="avg-monthly-income"
          size="sm"
          value={avgMonthlyIncome}
          onChange={(e) => setAvgMonthlyIncome(e.target.value)}
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Average Monthly Expenses:</FormLabel>
        <Input
          name="monthly-expenses"
          size="sm"
          value={monthlyExpenses}
          onChange={(e) => setMonthlyExpenses(e.target.value)}
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Projected financial outlook on :</FormLabel>
        <Calendar onChange={(e) => handleEndDateChange(e)} value={endDate} />
        <CalendarIcon w={8} h={8} />
      </FormControl>
      <FormControl>
        <FormLabel>Your savings will be {totalSavings}</FormLabel>
      </FormControl>
    </div>
  );
};

export default SavingsForm;
