export function formatDate(date: Date): string {
  date = correctUTC(date);
  const aaaa = date.getFullYear();
  const dd = date.getUTCDate();
  const mm = date.getUTCMonth() + 1;

  const ddString = dd > 10 ? String(dd) : "0" + dd;
  const mmString = mm > 10 ? String(mm) : "0" + mm;

  const cur_day = mmString + "/" + ddString + "/" + aaaa;

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const hoursString = hours > 10 ? String(hours) : "0" + hours;
  const minutesString = minutes > 10 ? String(minutes) : "0" + minutes;
  const secondsString = seconds > 10 ? String(seconds) : "0" + seconds;

  return (
    cur_day + " " + hoursString + ":" + minutesString + ":" + secondsString
  );
}

const MS_PER_MINUTE = 60000;

export function correctUTC(date: Date) {
  const offset = date.getTimezoneOffset();
  const newDate = new Date(date.getTime() - offset * MS_PER_MINUTE);
  return newDate;
}
