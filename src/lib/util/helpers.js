const getDayOfWeek = (day) => {
  const days = [
    'Nedjelja',
    'Ponedjeljak',
    'Utorak',
    'Srijeda',
    'Četvrtak',
    'Petak',
    'Subota',
  ];

  return days[day];
};

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

const getRecordsTitle = (width) => {
  if (width < 576) return 'Evidencija';
  else return 'Evidencija polaznika';
};

const formatDateForCompare = (date) => {
  return `${getDayOfWeek(date.getDay())} 
  ${date.getDate()}.${date.getMonth() + 1}.`;
};

export {
  getDayOfWeek,
  formatDay,
  formatDateTime,
  getRecordsTitle,
  formatDateForCompare,
};
