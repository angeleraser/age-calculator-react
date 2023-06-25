import "./assets/css/index.css";
import { Card } from "./components/Card/Card";
import { AgeForm } from "./components/AgeForm/AgeForm";
import { Heading } from "./components/Heading/Heading";
import { useState } from "react";

function getAgeYear(year = 0) {
  return Math.abs(year - new Date().getFullYear());
}

function getAgeMonths(month) {
  return Math.abs(new Date().getMonth() + 1 - month);
}

function App() {
  const [ageData, setAgeData] = useState({
    day: null,
    month: null,
    year: null,
  });

  return (
    <Card maxWidth="840px">
      <AgeForm onSubmit={(data) => setAgeData(data)} />

      <div className="headings-container">
        <Heading
          value={ageData.year !== null ? getAgeYear(ageData.year) : ""}
          label="years"
        />
        <Heading
          value={ageData.month !== null ? getAgeMonths(ageData.month) : ""}
          label="months"
        />
        <Heading value="" label="days" />
      </div>
    </Card>
  );
}

export default App;
