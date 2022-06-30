import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import "./style.css";
import { FormControl, FormLabel } from "@chakra-ui/react";

const DebtForm = () => {
  const [startingDebt, setStartingDebt] = useState(3000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(300);

  return (
    <div className="debt-form">
      <FormControl>
        <FormLabel>Starting debt:</FormLabel>
        <Input
          name="starting-Debt"
          size="sm"
          value={startingDebt}
          onChange={(e) => setStartingDebt(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Average Monthly installment:</FormLabel>
        <Input
          size="sm"
          value={monthlyInstallment}
          onChange={(e) => setMonthlyInstallment(e.target.value)}
        />
      </FormControl>
      <div>
        Your debt will be paid off in{" "}
        {Math.ceil(startingDebt / monthlyInstallment)} months
      </div>
    </div>
  );
};

export default DebtForm;
