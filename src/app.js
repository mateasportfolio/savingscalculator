import React from "react";
import "./app.css";
import { Input } from "@chakra-ui/react";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Btn_Container">
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
      </div>
    </div>
  );
}

export default App;
