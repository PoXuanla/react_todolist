import styled from "styled-components";
import React, { forwardRef } from "react";
const AddTaskInput = React.forwardRef((props, ref) => {
  return (
    <StyledAddTaskInput
      ref={ref}
      placeholder={props.placeholder}
      width={props.width}
    ></StyledAddTaskInput>
  );
});

const StyledAddTaskInput = styled.input`
  margin: 10px 0px;
  width: ${(props) => props.width || "auto"};
  heigth: 10px;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  outline: none;
  border: 0;
  ::placeholder {
    color: #8e8e8e;
  }
  &:focus {
    //border:1px solid black;
  }
`;

export default AddTaskInput;
