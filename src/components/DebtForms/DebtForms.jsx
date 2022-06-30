import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import "./style.css";

const DebtForm = () => {
  const [startingDebt, setStartingDebt] = useState(3000);
  const [monthlyInstallment, setMonthlyInstallment] = useState(300);

  return (
    <div className="debt-form">
      <Input
        size="sm"
        value={startingDebt}
        onChange={(e) => setStartingDebt(e.target.value)}
      />
      <Input
        size="sm"
        value={monthlyInstallment}
        onChange={(e) => setMonthlyInstallment(e.target.value)}
      />
      <div>
        Your debt will be paid off in{" "}
        {Math.ceil(startingDebt / monthlyInstallment)} months
      </div>
    </div>
  );
};

export default DebtForm;
