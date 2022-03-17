import styled from "styled-components";
import {device} from '../../Theme'

export const StyledAddTaskBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dadfdf;
`;
export const Container = styled.div`
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 0.3rem;
  width: 60%;
  max-width: 600px;
  @media (${device.mobile}) { {
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    padding-bottom: 1.5rem;
  }
`;
export const Button = styled.button`
  position: relative;
  border-radius: 100%;
  padding: 0px;
  margin: 0px;
  width: 35px;
  height: 35px;
  background-color: #363848;
  border: 0;
  top: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #2b2d3a;
  }
`;
export const CategoryGroup = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 0.8rem 0.8rem;

    border-radius: 5px;
    background-color: #dadfdf;
    border: 2px solid rgba(47, 79, 79, 0.6);
    color: rgba(47, 79, 79, 1);
    font-weight: 800;
    transition: all 0.3s;

    &:not(:last-child) {
      margin-right: 3px;
    }

    &:hover {
      color: white;
      background-color: rgba(47, 79, 79, 1);
      transform: scale(0.9);
    }

    @media (${device.mobile}) {
      padding: 0.7rem 1.5rem;
      font-size: 20px;
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }

  .active {
    color: white;
    background-color: rgba(47, 79, 79, 1);
    transform: scale(0.9);
  }
  @media (${device.mobile}) {
    padding-bottom: 2.5rem;
    justify-content: center;
    width: 100%;
  }
`;
