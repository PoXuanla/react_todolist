import styled from "styled-components";
import { inputError, labelError } from "../../Keyframes/AddTaskAnimation";
import {device} from '../../Theme'

export const InputGroup = styled.div`
  position: relative;
  height: 3.5rem;
  width: ${(props) => props.width || "auto"};
  @media only screen and (max-width: 768px) {
    height: 4.4rem;
  }
  .Input {
    width: 100%;
    height: 3.5rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #dadfdf;
    border: 2px solid rgba(47, 79, 79, 0.6);
    outline: none;
    @media (${device.mobile}) {
      height: 4.4rem;
    }
  }
  .Label {
    position: absolute;
    top: 50%;
    left: 0.7rem;
    transform: translate(0, -50%);
    font-size: 1.4rem;
    color: #2f4f4f;
    cursor: text;
    background-color: #dadfdf;
    transition: top 200ms ease, left 200ms ease, font-size 200ms ease;
  }
  .Input:focus ~ label,
  .Input:not(:placeholder-shown).Input:not(:focus) ~ .Label {
    top: -0.1rem;
    left: 0.7rem;
    padding: 0 0.3rem;
    font-size: 1.5rem;
    background-color: #dadfdf;
  }
  .labelErrorAlert {
    animation-name: ${labelError};
    animation-duration: ${(props) => {
      let animationTime = props.animationTime / 1000 + "s";
      return animationTime;
    }};
  }
  .inputErrorAlert {
    animation-name: ${inputError};
    animation-duration: ${(props) => {
      let animationTime = props.animationTime / 1000 + "s";
      return animationTime;
    }};
  }
`;
