import { useReducer } from "react";
import TaskContext from "./TaskContext";

const defaultTaskState = {
  tasks: [],
};
const TaskReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateArray = state.tasks.concat(action.task);

    return {
      tasks: updateArray,
    };
  }
  if (action.type === "REMOVE") {
    let updateTasks;
    updateTasks = state.tasks.filter((task) => task.id !== action.id);
    return {
      tasks: updateTasks,
    };
  }
  if(action.type === "EDIT"){
    let index = state.tasks.findIndex(element=>element.id === action.id);
    let updateTask = {...state.tasks[index],task:action.task}
    let updateTasks = state.tasks;
    updateTasks[index] = updateTask;
    return {
      tasks: updateTasks
    }
  }
  return defaultTaskState;
};
const TaskProvider = (props) => {
  const [taskState, dispatchTaskAction] = useReducer(
    TaskReducer,
    defaultTaskState
  );
  const addTaskHandler = (task) => {
    dispatchTaskAction({ type: "ADD", task: task });
  };
  const removeTaskHandler = (id) => {
    dispatchTaskAction({ type: "REMOVE", id: id });
  };
  const editTaskHandler = (id, task) => {
    dispatchTaskAction({ type: "EDIT", id: id, task: task });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: taskState.tasks,
        addTask: addTaskHandler,
        removeTask: removeTaskHandler,
        editTask: editTaskHandler,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
