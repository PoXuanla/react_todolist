import { keyframes } from "styled-components";

export const inputError = keyframes`
  0% {
    border: 2px solid #2f4f4f;
  }
  50% {
    border: 2px solid #008080;
  }
  100% {
    border: 2px solid #2f4f4f;
  }
`;
export const labelError = keyframes`
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
  }F
`