import styled from "styled-components";
import React, { forwardRef } from "react";

const TaskListLiInput = React.forwardRef((props, ref) => (
  <StyledInput
    ref={ref}
    defaultValue={props.defaultValue}
    style={{ display: props.display }}
    onBlur={props.onBlur}
    onKeyPress={props.onKeyPress}
  />
));

const StyledInput = styled.input`
  width: 100%;
  outline:none;
  border:none;
  text-align:center;
  font-size:1.5rem;
  font-weight:bold;
  
`;
export default TaskListLiInput;
