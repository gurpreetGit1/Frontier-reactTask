export const getDayfn = (date) => {
  return new Date(date).getDate();
};
export const getWeekDay = (date) => {
  return new Date(date).toLocaleDateString(undefined, { weekday: "long" });
};
export const getYear = (date) => {
  return new Date(date).toLocaleDateString(undefined, { year: "numeric" });
};
export const getFullMonth = (date) => {
  return new Date(date).toLocaleDateString(undefined, { month: "long" });
};

export const getMonth = (date) => {
  return new Date(date).toLocaleString("default", { month: "short" });
};
export const getTimeFn = (date) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
