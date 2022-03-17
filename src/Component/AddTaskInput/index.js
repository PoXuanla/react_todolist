import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";

import { InputGroup } from "./Styles";

const AddTaskInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [errorAlert, setErrorAlert] = useState(false);

  useImperativeHandle(ref, () => ({
    triggerErrorAlert: () => {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, props.animationTime);
    },
    getInputValue: () => {
      let value = inputRef.current.value;
      inputRef.current.value = "";
      return value;
    },
  }));

  return (
    <InputGroup width={props.width} animationTime={props.animationTime}>
      <input
        id={props.id}
        className={`Input ${errorAlert ? "inputErrorAlert" : ""}`}
        type="text"
        placeholder=" "
        autoComplete="off"
        ref={inputRef}
      ></input>
      <label
        className={`Label ${errorAlert ? "labelErrorAlert" : ""}`}
        htmlFor={props.id}
      >
        {props.id}
      </label>
    </InputGroup>
  );
});

export default AddTaskInput;
