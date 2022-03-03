const formatDay = (date) => {
  return `${date.getDate()}.${date.getMonth() + 1}. (${getDayOfWeek(
    date.getDay(),
  )})`;
};

const formatDateTime = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  return `${getDayOfWeek(startDate.getDay())} 
  ${startDate.getDate()}.${startDate.getMonth() + 1}. 
  ${prefixZero(startDate.getHours())}:${prefixZero(startDate.getMinutes())} - 
  ${prefixZero(endDate.getHours())}:${prefixZero(endDate.getMinutes())}`;
};

const prefixZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const formatDateForCompare = (date) => {
  return `${getDayOfWeek(date.getDay())} 
  ${date.getDate()}.${date.getMonth() + 1}.`;
};

export {
  formatDay,
  formatDateTime,
  formatDateForCompare,
};
