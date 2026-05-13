export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().toLocaleString('default', { month: 'long' });
export const currentMonthYear = `${currentMonth} ${currentYear}`;
