export const getTimeString = (date: number) => {
    return new Date(date).toLocaleString('en-US', { hour: 'numeric', hour12: true });
};

export const getTimeRangeString = (timeStart: number, timeEnd: number) => {
    return `${getTimeString(timeStart)} - ${getTimeString(timeEnd)}`;
};
