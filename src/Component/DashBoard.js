import styled from "styled-components";
import AddTask from "./AddTask/AddTask";
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
  padding:1.5rem 0;
  border-radius:.3rem;
  background-color: #2f4f4f;
  box-shadow: .2rem .2rem .2rem .1rem rgba(0, 0, 0, 0.2);
  overflow-y:scroll;
`;
const StyledDashBoard = styled.div`
  margin: 1rem 0;
  width: 80%;
  
`;

export default DashBoard;
