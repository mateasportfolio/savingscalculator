import React, { useState } from "react";
import "./style.css";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export const SavingsForm = () => {
  const [startingBalance, setstartingBalance] = useState(3000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(300);
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
        />
      </FormControl>
    </div>
  );
};
export default SavingsForm;
