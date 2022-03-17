import ListItem from "../ListItem";
import TaskContext from "../../Store/TaskContext";
import { useContext } from "react/cjs/react.development";
import { StyledTask, Container, Text } from "./Styles";

const Task = (props) => {

  const TaskCtx = useContext(TaskContext);
  
  const ListItems = TaskCtx.tasks.map((task) => {
    return (
      <ListItem
        id={task.id}
        task={task.task}
        category={task.category}
        finish={task.finish}
        key={task.id}
      />
    );
  });
  const List = (
    <Container>
      {ListItems.length !== 0 ? ListItems : <Text>Nothing to do.</Text>}
    </Container>
  );
  return <StyledTask>{List}</StyledTask>;
};
export default Task;
