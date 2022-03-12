import styled from "styled-components";

import React, { useState, useEffect } from "react";

import {inputError,labelError} from "../../Keyframes/AddTaskAnimation";

const AddTaskInput = (props) => {
  const animationTime = 500; //ms
  //Animation by empty Input
  useEffect(() => {
    if (props.inputIsEmpty && !props.value.trim()) {
      setTimeout(() => {
        props.inputIsEmptyHandler();
      }, animationTime);
    }
  }, [props.inputIsEmpty]);
  const valueHandler = (e) => {
    props.onValueHandler(e.target.value);
  };
  return (
    <StyledAddTaskInput width={props.width} animationTime={animationTime}>
      <input
        id={props.id}
        className={`form__input ${
          props.inputIsEmpty && !props.value.trim() ? "form__input--error" : ""
        }`}
        type="text"
        placeholder=" "
        autoComplete="off"
        value={props.value}
        onChange={valueHandler}
      ></input>
      <label
        className={`form__label ${
          props.inputIsEmpty && !props.value.trim() ? "form__label--error" : ""
        }`}
        htmlFor={props.id}
      >
        {props.id}
      </label>
    </StyledAddTaskInput>
  );
};

const StyledAddTaskInput = styled.div`
  position: relative;
  height: 3.5rem;
  width: ${(props) => props.width || "auto"};
  .form__input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: .7rem;
    border-radius: .5rem;
    background-color: #dadfdf;
    border: 2px solid #2a324b;
    outline: none;
  }
  .form__label {
    position: absolute;
    top: 50%;
    left: .7rem;
    transform: translate(0, -50%);
    font-size: 1.4rem;
    color: #2f4f4f;
    cursor: text;
    background-color: #dadfdf;
    transition: top 200ms ease, left 200ms ease, font-size 200ms ease;
  }
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: -.1rem;
    left: .7rem;
    padding: 0 .3rem;
    font-size: .8rem;
    background-color: #dadfdf;
  }
  .form__label--error {
    animation-name: ${labelError};
    animation-duration: ${(props) => {
      let animationTime = props.animationTime / 1000 + "s";
      return animationTime;
    }};
  }
  .form__input--error {
    animation-name: ${inputError};
    animation-duration: ${(props) => {
      let animationTime = props.animationTime / 1000 + "s";
      return animationTime;
    }};
  }
`;

export default AddTaskInput;
