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
          margin-left="16px"
          value={startingDebt}
          onChange={(e) => setStartingDebt(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Average Monthly installment:</FormLabel>
        <Input
          size="sm"
          margin-left="16px"
          value={monthlyInstallment}
          onChange={(e) => setMonthlyInstallment(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <div>
          Your debt will be paid off in{" "}
          {Math.ceil(startingDebt / monthlyInstallment)} months{" "}
          {(e) => setMonthlyInstallment(e.target.value)}
          {""}
        </div>
      </FormControl>
    </div>
  );
};

export default DebtForm;
