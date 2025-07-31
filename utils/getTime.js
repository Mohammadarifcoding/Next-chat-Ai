export const getTimeJs = (d) => {
  const date = new Date(d);
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return time;
};
