import styled from "styled-components";
import img from '../Image/do.jpg';

const FilterLine = (props) => {
  return <StyledFilterLine width={props.width}></StyledFilterLine>;
};

const StyledFilterLine = styled.div`
  width: ${(props) => props.width || "80%"};
  height: 50px;
  background-image: url(${img});
  margin: 5px auto;
  border-radius: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default FilterLine;
