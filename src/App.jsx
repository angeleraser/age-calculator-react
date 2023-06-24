import React from "react";
import "./assets/css/index.css";
import { Card } from "./components/Card/Card";
import { Input } from "./components/Input/Input";

function App() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Card maxWidth="840px">
      <Input
        errorMessage="Must be a valid day"
        id="day-input"
        label="Day"
        maxLength="2"
        onChange={setInputValue}
        placeholder="DD"
        validation={(value) => {
          const num = Number(value);
          return Number.isNaN(num) || num > 31 || num <= 0;
        }}
        value={inputValue}
        type="number"
      />
    </Card>
  );
}

export default App;
