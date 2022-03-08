import styled from "styled-components";
import AddTask from "./AddTask";
import FilterLine from "../UI/FilterLine";
import List from "./Task/List";
const DashBoard = (props) => {
  return <StyledDashBoard>
      <h3>TodoList</h3>
      <AddTask/>
      <List/>
  </StyledDashBoard>;
};

const StyledDashBoard = styled.div`
  margin:10px 0;
  width: 80%;
  // height: 80%;
  background-color: #FAF9FB;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow-y:scroll;
`;

export default DashBoard;
