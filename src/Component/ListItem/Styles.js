import styled from "styled-components";
import { fadeIn, fadeOut } from "../../Keyframes/ListItemAnimation";
import { color } from "../../Theme";

export const StyledListItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 600;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "header"
    "content";
  width: 100%;
  border-radius: 3px;
  background-color: #2f4f4f;
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
  animation-name: ${(props) => (props.isHidden ? fadeIn : fadeOut)};
  animation-duration: 0.3s;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgb(0 0 0 / 20%);

`;

export const Header = styled.div`
  position: relative;
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 7px;
`;
export const Status = styled.div`
  color: ${(props) => (props.status ? color.darkPink : color.darkGreen)};
  background-color: ${(props) =>
    props.status ? color.pink : color.lightGreen};
  border-radius: 3px;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgb(0 0 0 / 20%);
  padding: 3px 5px;
  font-weight: 700;
  font-size: 10px;
  line-height: 24px;
  margin-right: 7px;
  cursor: pointer;
  transition: all 0.2s;
`;
export const Category = styled.div`
  color: #dadfdf;
  margin-right: 3px;
  font-weight: 700;
  font-size: 10px;
  cursor:default;
`;
export const CreatedTime = styled.div`
  font-weight: 700;
  font-size: 10px;
  color: #dadfdf;
  cursor:default;

`;
export const Content = styled.div`
  grid-area: content;
  padding: 0 7px 7px 7px;
  overflow : hidden;
  line-height:.5;
  cursor:pointer;

`;
export const Text = styled.div`
  background-color: #dadfdf;
  border-radius: 3px;
  padding: 7px 7px;
  font-wight: 700;
  font-size: 14px;
  text-align:left;
  line-height: 20px;
  letter-spacing:1.5px;
  word-wrap:break-word;
  
`;
export const Input = styled.textarea`
  width:100%;
  background-color: #dadfdf;
  border-radius: 3px;
  padding: 7px 7px;
  font-wight: 700;
  font-size: 14px;
  text-align:left;
  line-height: 20px;
  letter-spacing:1.5px;
  outline:none;
  border:none;
  word-wrap:break-word;
  font-family: serif, sans-serif;
`;
export const DeleteBtn = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  color: #dadfdf;
  background-color: #2f4f4f;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
`;
