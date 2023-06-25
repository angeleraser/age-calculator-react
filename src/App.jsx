import "./assets/css/index.css";
import { Card } from "./components/Card/Card";
import { DateForm } from "./components/DateForm/DateForm";
import { Heading } from "./components/Heading/Heading";
import { useState } from "react";
import {
  dateToYears,
  getFloatingPoint,
  monthsToDays,
  yearsToMonths,
} from "./utils/date-validators";
import { animateNumbers } from "./utils/animate-numbers";

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
    days: null,
    months: null,
    years: null,
  });

  const [isAnimating, setIsAnimating] = useState(false);

  const handleDateSubmit = (payload) => {
    if (isAnimating) return;

    const { years, days, months } = getAccuratedAge(
      payload.day,
      payload.month,
      payload.year
    );

    setIsAnimating(true);

    animateNumbers({
      value: years,
      handler(value) {
        setAgeData((curr) => ({ ...curr, years: value }));
      },
    });

    animateNumbers({
      value: months,
      handler(value) {
        setAgeData((curr) => ({ ...curr, months: value }));
      },
      animationDelay: 100,
    });

    animateNumbers({
      value: days,
      handler(value) {
        setAgeData((curr) => ({ ...curr, days: value }));
      },
      clearFn() {
        setIsAnimating(false);
      },
      animationDelay: 200,
    });
  };

  return (
    <Card maxWidth="840px">
      <DateForm onSubmit={handleDateSubmit} />

      <div className="headings-container">
        <Heading
          value={ageData.years !== null ? ageData.years : ""}
          label="years"
        />

        <Heading
          value={ageData.months !== null ? ageData.months : ""}
          label="months"
        />

        <Heading
          value={ageData.days !== null ? ageData.days : ""}
          label="days"
        />
      </div>
    </Card>
  );
}

export default App;
