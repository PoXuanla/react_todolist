import styled from "styled-components";
import { useRef, useContext } from "react";
import AddTaskInput from "../UI/AddTask/AddTaskInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TaskContext from "../Store/TaskContext";
import { v4 as uuidv4 } from "uuid";

const AddTask = (props) => {
  const TaskCtx = useContext(TaskContext);
  const CategoryInput = useRef("");
  const TaskInput = useRef("");

  const addTaskHandler = () => {
    let category = CategoryInput.current.value
    let task = TaskInput.current.value
    if(category.length === 0 || task.length === 0)
    {
      alert('欄位要填寫好唷')
      return
    }
    TaskCtx.addTask({
      id: uuidv4(),
      category: category,
      task: task,
      created_time: Date.now(),
    });
    CategoryInput.current.value = '';
    TaskInput.current.value = '';
  };
  return (
    <StyledAddTask>
      
      <AddTaskInput placeholder="Category" width="30%" ref={CategoryInput} />
      <AddTaskInput placeholder="Add Task..." width="50%" ref={TaskInput} />
      
      <StyledBtn onClick={addTaskHandler}>
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "white" }} />
      </StyledBtn>
    </StyledAddTask>
  );
};

const StyledAddTask = styled.div`
  width: 80%;
  margin: 0px auto;
  padding: 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const StyledBtn = styled.button`
  border-radius: 100%;
  padding: 0px;
  margin: 0px;
  width: 30px;
  height: 30px;
  background-color: #fb9300;
  border: 0;
`;
export default AddTask;
