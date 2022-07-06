import React, { useState } from "react";
import "./style.css";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Calendar from "react-calendar";

export const SavingsForm = () => {
  const [startingBalance, setstartingBalance] = useState(3000);
  const [avgMonthlyIncome, setAvgMonthlyIncome] = useState(1000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(1500);
  const [financialOutlook, setfinancialOutlook] = useState(300);
  const [value, onChange] = useState(new Date());

  return (
    <div className="savings-form">
      <FormControl>
        <FormLabel>Starting Balance:</FormLabel>
        <Input
          name="starting-balance"
          size="sm"
          value={startingBalance}
          on
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
          on
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
          on
          onChange={(e) => setMonthlyExpenses(e.target.value)}
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Projected financial outlook on :</FormLabel>

        <Input
          size="sm"
          name="financial-outlook"
          value={financialOutlook}
          on
          onChange={(e) => setfinancialOutlook(e.target.value)}
          type="month"
          id="endDate"
          min="2016-06"
          minDetail="century"
          class="sc-pFZIQ gbgfMs"
        />
      </FormControl>
    </div>
  );
};
export default SavingsForm;
