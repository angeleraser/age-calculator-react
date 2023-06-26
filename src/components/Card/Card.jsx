import "./Card.css";

export const Card = ({ children, maxWidth = "auto", className = "" }) => {
  return (
    <div style={{ maxWidth }} className={`card ${className}`}>
      {children}
    </div>
  );
};
