import { classNames } from "../../utils/class-names";
import "./Button.css";

export const Button = ({
  children,
  type = "button",
  color = "primary",
  rounded = false,
}) => {
  return (
    <button
      type={type}
      className={`button${classNames({
        [`button-${color}`]: !!color,
        "button-rounded": rounded,
      })}`}
    >
      {children}
    </button>
  );
};
