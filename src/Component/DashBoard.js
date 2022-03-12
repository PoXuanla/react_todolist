import styled from "styled-components";
import AddTask from "./AddTask";
import FilterLine from "../UI/FilterLine";
import List from "./Task/List";
const DashBoard = (props) => {
  return (
    <StyledDashBoard>
      <StyledHeader>
        <h3>TodoList</h3>
        <AddTask />
      </StyledHeader>
      <StyledContent>
        <List />
      </StyledContent>
      
    </StyledDashBoard>
  );
};
const StyledHeader = styled.div`
height:20%;
`;
const StyledContent = styled.div`
  max-height:68%;
  padding:15px 0;
  border-radius:3px;
  background-color: #2f4f4f;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  overflow-y:scroll;
`;
const StyledDashBoard = styled.div`
  margin: 10px 0;
  width: 80%;
  
`;

export default DashBoard;
