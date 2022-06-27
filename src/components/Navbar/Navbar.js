import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button, Flex, Spacer } from "@chakra-ui/react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <Flex>
      <Button variant="outline" size="lg" color="white" margin="4">
        <Link to="/">Home</Link>
      </Button>

      <Button variant="outline" size="lg" color="white" margin="4">
        <Link to="/code">Code</Link>
      </Button>
      <Button variant="outline" size="lg" color="white" margin="4">
        <Link to="/hosting">Hosting</Link>
      </Button>
      <Spacer />

      <input
        class="l"
        type="checkbox"
        onClick={() => setIsDarkMode(!isDarkMode)}
      ></input>
    </Flex>
  );
};

export default Navbar;
