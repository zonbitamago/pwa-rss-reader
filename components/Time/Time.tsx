import React, { useState } from "react";
import "./Time.css";
import dayjs from "dayjs";

const Time = () => {
  const getMMDD = () => {
    return dayjs().format("M/D");
  };
  const getHHmmss = () => {
    return dayjs().format("HH:mm:ss");
  };

  const [MMDD, setMMDD] = useState(getMMDD());
  const [HHmmss, setHHmmss] = useState(getHHmmss());

  const setTime = () => {
    setMMDD(getMMDD());
    setHHmmss(getHHmmss());
  };
  setInterval(setTime, 1000);

  return (
    <div className="Time">
      <div className="Time-MMDD">{MMDD}</div>
      <div className="Time-HHmmss">{HHmmss}</div>
    </div>
  );
};

export default Time;
