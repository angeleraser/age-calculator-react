const classNames = (deps = {}) => {
  const classes = Object.entries(deps)
    .map((item) => {
      const [key, value] = item;
      if (!value || !key) return "";
      return ` ${key}`;
    })
    .join("");

  return classes.length ? classes : "";
};

export { classNames };
