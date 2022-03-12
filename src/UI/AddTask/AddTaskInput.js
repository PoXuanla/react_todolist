import styled from "styled-components";
import React, { useState, useEffect } from "react";

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
  height: 35px;
  width: ${(props) => props.width || "auto"};
  .form__input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 7px;
    border-radius: 5px;
    background-color: #dadfdf;
    border: 2px solid #2a324b;
    outline: none;
  }
  .form__label {
    position: absolute;
    top: 50%;
    left: 7px;
    transform: translate(0, -50%);
    font-size: 14px;
    color: #2f4f4f;
    cursor: text;
    background-color: #dadfdf;
    transition: top 200ms ease, left 200ms ease, font-size 200ms ease;
  }
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: -0.5px;
    left: 7px;
    padding: 0 3px;
    font-size: 8px;
    background-color: #dadfdf;
  }
  .form__label--error {
    animation-name: labelErrorAnimation;
    animation-duration: ${(props) => {
      let animationTime = props.animationTime / 1000 + "s";
      return animationTime;
    }};
  }
  .form__input--error {
    animation-name: inputErrorAnimation;
    animation-duration: ${(props) => {
      let animationTime = props.animationTime / 1000 + "s";
      return animationTime;
    }};
  }
  @keyframes inputErrorAnimation {
    0% {
      border: 2px solid #2f4f4f;
    }
    50% {
      border: 2px solid #008080;
    }
    100% {
      border: 2px solid #2f4f4f;
    }
  }
  @keyframes labelErrorAnimation {
    0% {
      left: 5px;
      color: #2f4f4f;
    }
    15% {
      left: 7.5px;
    }
    25% {
      left: 5px;
    }
    35% {
      left: 7.5px;
    }
    45% {
      left: 5px;
    }
    55% {
      left: 7.5px;
      color: #008080;
    }
    65% {
      left: 5px;
    }
    75% {
      left: 7.5px;
    }
    85% {
      left: 5px;
    }
    95% {
      left: 6.5px;
    }
    100% {
      left: 5px;
      color: #2f4f4f;
    }
  }
`;

export default AddTaskInput;