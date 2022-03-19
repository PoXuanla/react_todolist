import styled from "styled-components";
import { color, boxShadow } from "../../Theme";
export const Section = styled.div`
  width: 100%;
  margin:3rem auto;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 600px;
  border-radius: 3px;
  background-color: #2f4f4f;
  height: 50px;
  box-shadow:${boxShadow.basic};
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
export const FilterBar = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterBtn = styled.button`
  font-size: ${(props) => (props.active ? "16px" : "10px")};
  color: white;
  margin-left: 10px;
  font-weight: ${(props) => (props.active ? "700" : "300")};
  cursor: pointer;

  &:hover {
    font-weight: 700;
    font-size: 16px;
  }
`;
export const SortBar = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 12px;
    color: white;
    margin-right: 10px;
    color: ${color.lightGreen};
    cursor:default;
  }
`;

export const SortSelect = styled.div`
  width: 100px;
  height: 30px;
  margin-right: 10px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 20px;
    background-color: ${color.lightGreen};
    color: ${color.darkGreen};
    cursor:pointer;
  }
`;

export const SortList = styled.ul`
  display:${(prop) => (prop.active ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 50px;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  width: 150px;
  background-color: ${color.lightGreen};
  color:${color.darkGreen};
  
  border-radius: 3px;
  border:none;
  text-align: center;
  z-index:1;
  box-shadow:${boxShadow.basic};
  
  li {
    padding: 10px 0;
    margin: 0;
    list-style: none;
    font-size: 10px;
    font-weight:700;
    cursor:pointer;

    &:first-child{
      border-radius:3px 3px 0 0 ;
    }
    &:not(:last-child){
      border-top:1px solid rgba(0,0,0,.2);
      border-left:1px solid rgba(0,0,0,.2);
      border-right:1px solid rgba(0,0,0,.2);
      border-bottom:0;
    }
    &:last-child{
      border-top:1px solid rgba(0,0,0,.2);
      border-radius:0 0 3px 3px;
    }
    &:not(:last-child):hover{
      border:1px solid ${color.darkGreen};
      + li {
        border-top:none;
      }
    }
    &:last-child:hover{
      border:1px solid ${color.darkGreen};
    }
`;

// export const StyledFilterBar = styled.div`
//   padding-bottom: 2rem;
//   background: #dadfdf;
// `;

// export const Container = styled.div`
//   width: 80%;
//   height: 100%;
//   margin: 0 auto;
//   border-radius: 0.5rem;
//   list-style-type: none;

//   @media (${device.mobile}) {
//     width: 90%;
//   }
// `;
// export const Bar = styled.div`
//   position:relative;
//   width:180px;
//   height:40px;

// }
// `;
// export const Button = styled.button`
// cursor:pointer;
//   position: absolute;
//   z-index: 1;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: #2f4f4f;
//   border-radius: 15px;
//   padding: 10px;
//   box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
//   label {
//     font-size: 1.5rem;
//     color: #dadfdf;
//     font-weight: 600;
//     width: 50px;
//     padding: 10px;
//     cursor: pointer;
//   }
// `;
// export const FilterSelect = styled.button`
//   z-index: 0;
//   position: absolute;
//   top: 0;
//   left: ${(props) => (props.active ? "200px" : "0")};
//   opacity: ${(props) => (props.active ? ".8" : "0")};
//   border-radius: 15px;
//   color: #dadfdf;
//   font-size: 1.5rem;
//   font-weight: 600;
//   background-color: #2f4f4f;
//   padding: 10px;
//   transition: all 0.5s;
//   height: 40px;
//   &:hover{
//       cursor:pointer;
//       box-shadow: ${(props) => (props.active ? "0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.2)" : "")};
//       opacity:1;
//   }
// `;
