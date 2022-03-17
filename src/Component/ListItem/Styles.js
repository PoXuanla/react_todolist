import styled from "styled-components";
import { fadeIn, fadeOut } from "../../Keyframes/ListItemAnimation";
import {device} from '../../Theme'

export const StyledListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${device.mobile}) {
    width: 90%;

    margin: 2rem auto;
  }
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
  animation-name: ${(props) => (props.isHidden ? fadeIn : fadeOut)};
  animation-duration: 0.3s;

  .Category {
    width: 10%;
    height: 3rem;

    background-color: #d0b0b0;
    border-radius: 2rem;
    line-height: 3rem;
    font-size: 1.4rem;
    color: #3f3f3f;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
    @media (${device.mobile}) {
      width: 15%;
      font-weight: 700;
      font-size: 16px;
    }
  }
  .Task {
    width: 70%;
    height: 3.5rem;
    background: #3f3f3f;
    border-radius: 1rem;
    line-height: 3.5rem;
    text-align: center;
    background-color: #dadfdf;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
    font-size: 20px;
    @media (${device.mobile}) {
      width: 50%;
      font-size: 20px;
    }
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    font-size: 20px;

    font-weight: bold;
    background-color: #dadfdf;
    color: #3f3f3f;
  }
  .EditBtn {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    border: 0;
    margin: 0 0px;
    box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
    background-color: #dadfdf;

    &:not(:last-of-type) {
      margin: 0.3rem 0.5rem 0 0;
    }
    transition: 0.4s;
    &:hover {
      background-color: #92a3a2;
    }
  }
  .ProgressBtn {
    width: 17px;
    height: 17px;
    transition: all 0.2s;
  }
  .exit {
    transform: scale(0);
  }
`;
