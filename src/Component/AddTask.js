import styled, { keyframes } from "styled-components";
import { useRef, useContext, useState } from "react";
import AddTaskInput from "../UI/AddTask/AddTaskInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TaskContext from "../Store/TaskContext";
import { v4 as uuidv4 } from "uuid";

const AddTask = (props) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [inputIsEmpty,setInputIsEmpty] = useState(false);
  
  const TaskCtx = useContext(TaskContext);

  const addTaskHandler = () => {
    let category = categoryValue;
    let task = taskValue;
    if((category.trim().length === 0) || (task.trim().length === 0))
    {
      setInputIsEmpty(true)
      return;
    }
    TaskCtx.addTask({
      id: uuidv4(),
      category: categoryValue,
      task: taskValue,
      created_time: Date.now(),
    });
    setCategoryValue("");
    setTaskValue("");
    setInputIsEmpty(false)
  };
  const categoryValueHandler = (value) => {
    setCategoryValue(value);
  };
  const taskValueHandler = (value) => {
    setTaskValue(value);
  };
  const inputIsEmptyHandler = () => {
    setInputIsEmpty(false)
  }
  return (
    <StyledAddTask>
      <AddTaskInput
        id="Category"
        width="30%"
        value={categoryValue}
        onValueHandler={categoryValueHandler}
        inputIsEmpty={inputIsEmpty}
        inputIsEmptyHandler={inputIsEmptyHandler}
      />
      <AddTaskInput
        id="Task"
        width="50%"
        value={taskValue}
        onValueHandler={taskValueHandler}
        inputIsEmpty={inputIsEmpty}
        inputIsEmptyHandler={inputIsEmptyHandler}
      />

      <StyledBtn onClick={addTaskHandler}>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "white",cursor:"pointer" }}
        />
      </StyledBtn>
    </StyledAddTask>
  );
};

const StyledAddTask = styled.div`
  width: 80%;
  margin: 10px auto;
  padding: 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledBtn = styled.button`
  position: relative;
  border-radius: 100%;
  padding: 0px;
  margin: 0px;
  width: 35px;
  height: 35px;
  background-color: #363848;
  border: 0;
  top: 0px;
  transition: 0.3s;
  &:hover {
    background-color: #2b2d3a;
  }
`;

export default AddTask;
