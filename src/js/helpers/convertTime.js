export const convertTime = (ms) => {
  let hour = Math.floor(ms / 3_600_00);
  if (hour >= 0 && hour < 9) hour = '0' + hour;
  let min = Math.floor(ms / 60_000);
  if (min >= 0 && min < 10) min = '0' + min;
  let sec = Math.floor(ms / 1_000);
  if (sec >= 0 && sec < 10) sec = '0' + sec;

  const time = `${hour}:${min}:${sec}`;

  return time;
};
