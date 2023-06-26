import "./Result.css";

export const Result = ({ value = "", label = "", subLabel = "" }) => {
  return (
    <h2 className="result">
      <span className="result-value">{value || "--"}</span>
      <span className="result-label"> {label}</span>
      <span className="result-sublabel">{subLabel}</span>
    </h2>
  );
};
