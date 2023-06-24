import "./Card.css";

export const Card = ({ children, maxWidth = "auto" }) => {
  return (
    <div style={{ maxWidth }} className="card">
      {children}
    </div>
  );
};
