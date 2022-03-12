import { keyframes } from "styled-components";

export const inputError = keyframes`
  0% {
    border: .2rem solid #2f4f4f;
  }
  50% {
    border: .2rem solid #008080;
  }
  100% {
    border: .2rem solid #2f4f4f;
  }
`;
export const labelError = keyframes`
  0% {
    left: .5rem;
    color: #2f4f4f;
  }
  15% {
    left: .75rem;
  }
  25% {
    left: .5rem;
  }
  35% {
    left: .75rem;
  }
  45% {
    left: .5rem;
  }
  55% {
    left: .75rem;
    color: #008080;
  }
  65% {
    left: .5rem;
  }
  75% {
    left: .75rem;
  }
  85% {
    left: .5rem;
  }
  95% {
    left: .75rem;
  }
  100% {
    left: .5rem;
    color: #2f4f4f;
  }
`