export const getTimeString = (date: number) => {
    return new Date(date).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
};

export const getTimeRangeString = (timeStart: number, timeEnd?: number) => {
  if (!timeEnd)
    return getRelativeTime(timeStart, timeEnd);
  return `${getTimeString(timeStart)} - ${getTimeString(timeEnd)}`;
};

export const getRelativeTimeHelper = (seconds: number) => {
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + "y";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + "m";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + "h";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + "m";
    }
    return Math.floor(seconds) + "s";
}

export const getRelativeTime = (timeStart: number, timeEnd?: number) => {
    var seconds = Math.floor((new Date().getTime() - new Date(timeStart).getTime()) / 1000);

    if (timeEnd) {
        return `${getRelativeTimeHelper(seconds)} ago`
    }
    return `Since ${getRelativeTimeHelper(seconds)} ago`
}
