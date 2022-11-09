import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const DebtForm = () => {
  const [startingDebt, setStartingDebt] = useState(3000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(300);

  return (
    <div className="debt-form">
      <FormControl>
        <FormLabel>Starting debt:</FormLabel>

        <Input
          type="number"
          name="starting-Debt"
          size="sm"
          ml="16px"
          value={startingDebt}
          onChange={(e) => setStartingDebt(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Average Monthly installment:</FormLabel>
        <Input
          type="number"
          size="sm"
          ml="16px"
          value={monthlyInstallment}
          onChange={(e) => setMonthlyInstallment(e.target.value)}
        />
      </FormControl>
      <FormControl>
        Your debt will be paid off in{" "}
        {Math.ceil(startingDebt / monthlyInstallment)} months{" "}
        {(e) => setMonthlyInstallment(e.target.value)}
        {""}
      </FormControl>
    </div>
  );
};

export default DebtForm;
