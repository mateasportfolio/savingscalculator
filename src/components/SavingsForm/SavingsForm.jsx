import React, { useState } from "react";
import "./style.css";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const SavingsForm = () => {
  return (
    <div className="savings-form">
      <FormControl>
        <FormLabel>Starting Balance:</FormLabel>
        <Input
          name="Starting Balance"
          size="sm"
          value={startingBalance(e.target.value)}
        />
      </FormControl>
    </div>
  );
};
