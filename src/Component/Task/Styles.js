import styled from "styled-components";
import {device} from '../../Theme'
export const StyledTask = styled.div`
  padding-bottom:2rem;
  background:#dadfdf;

`
export const Container = styled.div`
  width: 80%;
  height:100%;
  margin: 0 auto;
  border-radius: .5rem;
  list-style-type: none;
  padding:3rem;
  border-radius:.3rem;
  background-color: #2f4f4f;
  box-shadow: .2rem .2rem .2rem .1rem rgba(0, 0, 0, 0.2);
  
  @media (${device.mobile}) {
    width:90%;  
    padding:1rem;
  }
`;
export const Text = styled.div`
  line-height: 3.8rem;
  height: 3.8rem;
  font-weight:900;
  letter-spacing:3px;
  font-size:20px;
  color:white;
`;
