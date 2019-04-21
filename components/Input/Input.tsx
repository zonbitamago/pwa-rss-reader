import React, { useState } from "react";
import "./Input.css";
import TextField from "@material-ui/core/TextField";

export interface InputInterface {
  value: string | number;
  changeParentVal: any;
  name: string;
}

const Input = (props: InputInterface) => {
  const [val, setVal] = useState(props.value != undefined ? props.value : "");

  const changeVal = e => {
    setVal(e.target.value);
    if (props.changeParentVal != undefined) {
      props.changeParentVal(e.target.value);
    }
  };
  return (
    <div className="Input">
      <TextField
        required
        id={props.name}
        label={props.name}
        onChange={changeVal}
        value={val}
      />
    </div>
  );
};
export default Input;
