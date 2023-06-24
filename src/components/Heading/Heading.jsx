import './Heading.css'

export const Heading = ({ value = "", label = "" }) => {
  return (
    <h2 className="heading">
      <span className="heading-value">{value || "--"}</span>
      {label}
    </h2>
  );
};
