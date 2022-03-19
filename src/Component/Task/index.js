import ListItem from "../ListItem";
import TaskContext from "../../Store/TaskContext";
import { useContext } from "react";
import { StyledTask, Container, Text } from "./Styles";

const Task = (props) => {

  const TaskCtx = useContext(TaskContext);
  
  const ListItems = TaskCtx.arrangedTasks.map((task) => {
    return (
      <ListItem
        id={task.id}
        task={task.task}
        created_time={task.created_time}
        category={task.category}
        status={task.status}
        key={task.id}
      />
    );
  });
  const List = (
    <Container>
      {ListItems.length !== 0 ? ListItems : <Text>無</Text>}
    </Container>
  );
  return <StyledTask>{List}</StyledTask>;
};
export default Task;
