import React from "react";
import { Input } from "../Input/Input";
import "./DateForm.css";
import { Button } from "../Button/Button";
import { ArrowIcon } from "../ArrowIcon/ArrowIcon";
import {
  isFutureDate,
  isValidDay,
  isValidMonth,
  isValidYear,
} from "../../utils/date-validators";

export const DateForm = ({ onSubmit }) => {
  const [fieldsValue, setFieldsValue] = React.useState({
    day: "",
    month: "",
    year: "",
  });

  const [fieldsError, setFieldsError] = React.useState({
    day: "",
    month: "",
    year: "",
  });

  const handleFieldsValueChange = (name) => {
    return (value) => {
      setFieldsValue((curr) => ({ ...curr, [name]: value }));
    };
  };

  const handleFieldsError = (name) => {
    return (value) => {
      setFieldsError((curr) => ({ ...curr, [name]: value }));
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { year, month, day } = {
      year: Number(fieldsValue.year),
      month: Number(fieldsValue.month),
      day: Number(fieldsValue.day),
    };

    if (Object.values(fieldsError).some((err) => err)) return;

    if (isFutureDate(day, month, year)) {
      return alert("The date may not be in the future");
    }

    onSubmit?.({
      year,
      month,
      day,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="date-form">
      <div className="date-form-fields">
        <Input
          required
          errorMessage="Must be a valid day"
          id="day-input"
          label="Day"
          maxLength="2"
          onChange={handleFieldsValueChange("day")}
          invalid={
            !isValidDay(
              Number(fieldsValue.day),
              Number(fieldsValue.month),
              Number(fieldsValue.year)
            )
          }
          placeholder="DD"
          validation={(day) => {
            return isValidDay(
              Number(day),
              Number(fieldsValue.month),
              Number(fieldsValue.year)
            );
          }}
          value={fieldsValue.day}
          onInvalid={handleFieldsError("day")}
          type="number"
        />

        <Input
          required
          errorMessage="Must be a valid month"
          id="month-input"
          label="month"
          maxLength="2"
          onChange={handleFieldsValueChange("month")}
          placeholder="MM"
          validation={(month) => isValidMonth(Number(month))}
          value={fieldsValue.month}
          onInvalid={handleFieldsError("month")}
          type="number"
        />

        <Input
          required
          errorMessage="Must be a valid year"
          id="year-input"
          label="year"
          maxLength="4"
          onChange={handleFieldsValueChange("year")}
          placeholder="YYYY"
          value={fieldsValue.year}
          onInvalid={handleFieldsError("year")}
          validation={(year) => isValidYear(Number(year))}
          type="number"
        />
      </div>

      <div className="date-form-submit-btn">
        <Button type="submit" rounded>
          <ArrowIcon />
        </Button>
      </div>
    </form>
  );
};
