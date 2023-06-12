export const getTimeString = (date: Date) => {
    return date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
};

export const getTimeRangeString = (timeStart: Date, timeEnd: Date) => {
    return `${getTimeString(timeStart)} - ${getTimeString(timeEnd)}`;
};
