import styled from "styled-components";
import {device,color} from '../../Theme'
export const StyledTask = styled.div`
  padding-bottom:2rem;
  background:#dadfdf;

`
export const Container = styled.div`
  width: 600px;
  height:100%;
  margin: 0 auto;
  border-radius: .5rem;
  list-style-type: none;
  padding-bottom:3rem;
  border-radius:.3rem;
  background-color: #dadfdf;
  // box-shadow: .2rem .2rem .2rem .1rem rgba(0, 0, 0, 0.2);
  
  @media (${device.mobile}) {
    width:95%;  
    padding:0rem;
  }
`;
export const Text = styled.div`
  line-height:91px;
  height: 91px;
  font-weight:900;
  letter-spacing:3px;
  font-size:10px;
  color:${color.lightGreen};
  background-color:${color.darkGreen};
  border-radius:3px;
`;
