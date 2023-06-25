function animateNumbers({
  value,
  durationMs = 1000,
  handler,
  clearFn,
  animationDelay = 0,
}) {
  let totalMs = 0;
  const intervalMs = 35;

  setTimeout(() => {
    const animationInterval = setInterval(() => {
      totalMs += intervalMs;
      let randomNums = "";

      for (let index = 0; index < String(value + 10).length; index++) {
        randomNums += String(Math.floor(Math.random() * 9) + 1);
      }

      if (totalMs >= durationMs) {
        randomNums = String(value);
        clearInterval(animationInterval);
        clearFn?.();
      }

      handler?.(randomNums);
    }, intervalMs);
  }, animationDelay);
}

export { animateNumbers };
