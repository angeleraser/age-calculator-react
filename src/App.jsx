import "./assets/css/index.css";
import { Card } from "./components/Card/Card";
import { AgeForm } from "./components/AgeForm/AgeForm";
import { Heading } from "./components/Heading/Heading";
import { useEffect, useState } from "react";
import {
  dateToYears,
  getFloatingPoint,
  monthsToDays,
  yearsToMonths,
} from "./utils/date-validators";

function getAccuratedAge(day, month, year) {
  const years = dateToYears(day, month, year);
  const months = yearsToMonths(getFloatingPoint(years));
  const days = monthsToDays(getFloatingPoint(months));

  return {
    years: Math.floor(years),
    months: Math.floor(months),
    days: Math.round(days),
  };
}

function App() {
  const [ageData, setAgeData] = useState({
    day: null,
    month: null,
    year: null,
  });

  useEffect(() => {
    if (ageData.day && ageData.month && ageData.year) {
      console.log(getAccuratedAge(ageData.day, ageData.month, ageData.year));
    }
  }, [ageData]);

  return (
    <Card maxWidth="840px">
      <AgeForm onSubmit={(data) => setAgeData(data)} />

      <div className="headings-container">
        <Heading label="years" />
        <Heading label="months" />
        <Heading value="" label="days" />
      </div>
    </Card>
  );
}

export default App;
