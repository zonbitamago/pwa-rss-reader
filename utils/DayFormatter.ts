import dayjs from "dayjs";

const YYYYMMDDHH24MMSS = (dayString?: string) => {
  return dayjs(dayString).format("YYYY/MM/DD HH:mm:ss");
};

const HH24MMSS = (dayString?: string) => {
  return dayjs(dayString).format("HH:mm:ss");
};

const MD = (dayString?: string) => {
  return dayjs(dayString).format("M/D");
};

export { YYYYMMDDHH24MMSS, HH24MMSS, MD };
