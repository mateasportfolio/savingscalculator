import React from "react";
import "./app.css";
import { Input } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Input
          htmlSize={20}
          width="auto"
          placeholder="DEBT_PAYOFF"
          focusBorderColor="pink.400"
        />
        <Input
          htmlSize={20}
          width="auto"
          placeholder="LIFTETIME SAVINGS"
          focusBorderColor="pink.400"
        />
      </header>
    </div>
  );
}

export default App;
