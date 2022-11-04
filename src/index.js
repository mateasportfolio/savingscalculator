import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript, theme } from "@chakra-ui/react";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);

reportWebVitals();
