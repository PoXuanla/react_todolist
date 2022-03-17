import styled from "styled-components";
import {device} from '../../Theme'

export const StyledFilterBar = styled.div`
  padding-bottom: 2rem;
  background: #dadfdf;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border-radius: 0.5rem;
  list-style-type: none;

  @media (${device.mobile}) {
    width: 90%;
  }
`;
export const Bar = styled.div`
  position:relative;
  width:180px;
  height:40px;
  
}
`;
export const Button = styled.button`
cursor:pointer;
  position: absolute;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2f4f4f;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
  label {
    font-size: 1.5rem;
    color: #dadfdf;
    font-weight: 600;
    width: 50px;
    padding: 10px;
    cursor: pointer;
  }
`;
export const FilterSelect = styled.button`
  z-index: 0;
  position: absolute;
  top: 0;
  left: ${(props) => (props.active ? "200px" : "0")};
  opacity: ${(props) => (props.active ? ".8" : "0")};
  border-radius: 15px;
  color: #dadfdf;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #2f4f4f;
  padding: 10px;
  transition: all 0.5s;
  height: 40px;
  &:hover{
      cursor:pointer;
      box-shadow: ${(props) => (props.active ? "0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2)" : "")};
      opacity:1;
  }
`;
