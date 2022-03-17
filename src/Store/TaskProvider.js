import { useReducer, useEffect } from "react";
import TaskContext from "./TaskContext";
//  console.log(JSON.parse(localStorage.getItem("data")).r || 'bitch')
const defaultTaskState = {
  filterMode:
    localStorage.getItem("data") !== null
      ? JSON.parse(localStorage.getItem("data")).filterMode || 'CreatedTime'
      : "CreatedTime",
  tasks:
    localStorage.getItem("data") !== null
      ? JSON.parse(localStorage.getItem("data")).tasks || []
      : [],
};
const TaskReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateTasks = state.tasks.concat(action.task);
    return {
      filterMode: state.filterMode,
      tasks: updateTasks,
    };
  }
  if (action.type === "REMOVE") {
    let updateTasks = state.tasks.filter((task) => task.id !== action.id);
    return {
      filterMode: state.filterMode,
      tasks: updateTasks,
    };
  }
  if (action.type === "EDIT") {
    let index = state.tasks.findIndex((element) => element.id === action.id);
    let updateTask = { ...state.tasks[index], task: action.task };
    let updateTasks = [...state.tasks];
    updateTasks[index] = updateTask;
    return {
      filterMode: state.filterMode,
      tasks: updateTasks,
    };
  }
  if (action.type === "CHANGE_STATUS") {
    let index = state.tasks.findIndex((element) => element.id === action.id);
    let updateTask = {
      ...state.tasks[index],
      finish: !state.tasks[index].finish,
    };
    let updateTasks = [...state.tasks];
    updateTasks[index] = updateTask;
    if(state.filterMode === 'Status')
    {
      updateTasks.sort(function (a, b) {
        let NumberA = Number(a.finish);
        let NumberB = Number(b.finish);
        if (NumberA < NumberB) return 1;
        if (NumberA > NumberB) return -1;
        return 0;
      });
    }
    return {
      filterMode: state.filterMode,
      tasks: updateTasks,
    };
  }

  if (action.type === "CHANGE_FILTERMODE") {
    let updateTasks = [...state.tasks];
    if (action.filterMode === "CreatedTime") {
      updateTasks.sort((a, b) => {
        return a.created_time - b.created_time;
      });
    }
    if (action.filterMode === "Status") {
      updateTasks.sort(function (a, b) {
        let NumberA = Number(a.finish);
        let NumberB = Number(b.finish);
        if (NumberA < NumberB) return 1;
        if (NumberA > NumberB) return -1;
        return 0;
      });
    }
    return {
      filterMode: action.filterMode,
      tasks: updateTasks,
    };
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
  const changeStatusHandler = (id) => {
    dispatchTaskAction({ type: "CHANGE_STATUS", id: id });
  };
  const changeFilterModeHandler = (filterMode) => {
    dispatchTaskAction({ type: "CHANGE_FILTERMODE", filterMode: filterMode });
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(taskState));
  }, [taskState]);
  return (
    <TaskContext.Provider
      value={{
        tasks: taskState.tasks,
        filterMode: taskState.filterMode,
        addTask: addTaskHandler,
        removeTask: removeTaskHandler,
        editTask: editTaskHandler,
        changeStatus: changeStatusHandler,
        changeFilterMode: changeFilterModeHandler,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
