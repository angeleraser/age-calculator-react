import React from "react";
import { Input } from "../Input/Input";
import "./AgeForm.css";
import { Button } from "../Button/Button";
import { ArrowIcon } from "../ArrowIcon/ArrowIcon";
import { isValidDay, isValidMonth, validateYear } from "../../utils/validators";

export const AgeForm = ({ onSubmit }) => {
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

    if (Object.values(fieldsError).some((err) => err)) return;

    onSubmit?.({
      year: Number(fieldsValue.year),
      month: Number(fieldsValue.month),
      day: Number(fieldsValue.month),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="age-form">
      <div className="age-form-fields">
        <Input
          required
          errorMessage="Must be a valid day"
          id="day-input"
          label="Day"
          maxLength="2"
          onChange={handleFieldsValueChange("day")}
          invalid={
            !isValidDay(Number(fieldsValue.day), Number(fieldsValue.month))
          }
          placeholder="DD"
          validation={(day) => {
            return isValidDay(Number(day), Number(fieldsValue.month));
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
          validation={(year) => validateYear(Number(year))}
          type="number"
        />
      </div>

      <div className="age-form-submit-btn">
        <Button type="submit" rounded>
          <ArrowIcon />
        </Button>
      </div>
    </form>
  );
};
