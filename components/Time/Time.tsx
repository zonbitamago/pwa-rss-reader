import React, { useState } from "react";
import "./Time.css";
import dayjs from "dayjs";
import * as DayFormatter from "../../utils/DayFormatter";

const Time = () => {
  const getMMDD = () => {
    return DayFormatter.MD();
  };
  const getHHmmss = () => {
    return DayFormatter.HH24MMSS();
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
