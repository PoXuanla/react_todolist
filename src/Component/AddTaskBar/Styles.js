import styled from "styled-components";
import { color, boxShadow } from "../../Theme";
import { submitError } from "../../Keyframes/AddTaskAnimation";
export const StyledAddTaskBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.lightGreen};
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 150px;
  border: 1.5px solid rgb(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
  border-radius: 5px;
  background: ${color.lightGreen};
  box-shadow: ${boxShadow.basic};

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    border-radius: 0px;
    box-shadow: none;
    border: none;
    border-bottom: 1.5px solid rgb(0, 0, 0, 0.2);
  }
`;
export const TextArea = styled.input`
  resize: none;
  height: 100px;
  width: 100%;
  outline: none;
  font-size: 15px;
  letter-spacing: 5px;
  line-height: 15px;
  border-radius: 5px;
  padding: 10px;
  border: none;
  background: ${color.lightGreen};
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.darkGreen};
    border-radius: 5px;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  
`;
export const CategoryGroup = styled.div``;
export const CategoryBtn = styled.button`
  padding: 5px 7px;
  margin: 0 2px;
  border: 1.5px solid rgb(0, 0, 0, 0.2);
  border-radius: 3px;
  font-weight: 700;
  font-size: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? color.lightGreen : color.darkGreen)};
  background-color: ${(props) =>
    props.active ? color.darkGreen : color.lightGreen};

  &:hover {
    background-color: ${color.darkGreen};
    color: ${color.lightGreen};
  }
`;
export const SubmitBtn = styled.button`
  border-radius: 3px;
  border: none;
  margin: 0 2px;
  padding: 5px 25px;
  border: 1.5px solid rgb(0, 0, 0, 0.2);
  color: ${color.darkPink};
  cursor: pointer;
  font-weight: 700;
  background-color: ${color.pink};
  font-size: 10px;
  animation-name: ${(props) => (props.active ? submitError : "")};
  animation-duration: ${(props) => (props.active ? ".5s" : "")};
`;
