import styled from "styled-components";
import ListItem from "./ListItem";
import TaskContext from "../../Store/TaskContext";
import { useContext } from "react/cjs/react.development";
const List = (props) => {
  const TaskCtx = useContext(TaskContext);
  const ListItems = TaskCtx.tasks.map((task) => {
    return (
      <ListItem
        id={task.id}
        task={task.task}
        category={task.category}
        key={task.id}
      />
    );
  });
  return (
    <StyledList>
      {ListItems.length !== 0 ? ListItems : <StyledText>No Todo</StyledText>}
    </StyledList>
  );
};

const StyledList = styled.ul`
  width: 80%;
  margin: 0 auto;
  padding: 0;
  border-radius: 5px;
  list-style-type: none;
  
`;
const StyledText = styled.div`
  line-height: 38px;
  height: 38px;
`;
export default List;
