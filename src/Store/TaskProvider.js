import { useReducer, useEffect } from "react";
import TaskContext from "./TaskContext";

const defaultTaskState = {
  tasks:
    localStorage.getItem("data") !== null
      ? JSON.parse(localStorage.getItem("data")).tasks || []
      : [],
  arrangedTasks:
    localStorage.getItem("data") !== null
      ? JSON.parse(localStorage.getItem("data")).arrangedTasks || []
      : [],
  sortMode:
    localStorage.getItem("data") !== null
      ? JSON.parse(localStorage.getItem("data")).sortMode || { name: "CreatedTime", index: 1 ,chineseName:'建立時間'}
      : { name: "CreatedTime", index: 1 ,chineseName:'建立時間'},
  filterMode:
    localStorage.getItem("data") !== null
      ? JSON.parse(localStorage.getItem("data")).filterMode || "All"
      : "All",
};
const filterTasksHandler = (tasks, filterMode) => {
  switch (filterMode) {
    case "All":
      return tasks;
    case "Work":
      return tasks.filter((task) => task.category === "Work");
    case "Study":
      return tasks.filter((task) => task.category === "Study");
    case "Other":
      return tasks.filter((task) => task.category === "Other");
    default:
      return tasks;
  }
};
const sortTasksHandler = (tasks, SortMode) => {
  switch (SortMode) {
    case "CreatedTime":
      return tasks.sort((a, b) => {
        return a.created_time - b.created_time;
      });
    case "Status":
      return tasks.sort((a, b) => {
        let NumberA = Number(a.status);
        let NumberB = Number(b.status);
        if (NumberA < NumberB) return 1;
        if (NumberA > NumberB) return -1;
        return 0;
      });
    default:
      return tasks;
  }
};
const arrangedTasksHandler = (tasks, filterMode, SortMode) => {
  let filterTasks = filterTasksHandler(tasks, filterMode);
  let arrangedTasks = sortTasksHandler(filterTasks, SortMode);
  return arrangedTasks;
};
const TaskReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateTasks = state.tasks.concat(action.task);
    let arrangedTasks = arrangedTasksHandler(
      updateTasks,
      state.filterMode,
      state.sortMode.name
    );

    return {
      tasks: updateTasks,
      arrangedTasks: arrangedTasks,
      sortMode: state.sortMode,
      filterMode: state.filterMode,
    };
  }
  if (action.type === "REMOVE") {
    let updateTasks = state.tasks.filter((task) => task.id !== action.id);
    let arrangedTasks = arrangedTasksHandler(
      updateTasks,
      state.filterMode,
      state.sortMode.name
    );

    return {
      tasks: updateTasks,
      arrangedTasks: arrangedTasks,
      sortMode: state.sortMode,
      filterMode: state.filterMode,
    };
  }
  if (action.type === "UPDATE") {
    let index = state.tasks.findIndex((element) => element.id === action.id);
    let updateTask = { ...state.tasks[index], task: action.task };
    let updateTasks = [...state.tasks];
    updateTasks[index] = updateTask;

    let arrangedTasks = arrangedTasksHandler(
      updateTasks,
      state.filterMode,
      state.sortMode.name
    );

    return {
      tasks: updateTasks,
      arrangedTasks: arrangedTasks,
      sortMode: state.sortMode,
      filterMode: state.filterMode,
    };
  }
  if (action.type === "CHANGE_STATUS") {
    let index = state.tasks.findIndex((element) => element.id === action.id);
    let updateTask = {
      ...state.tasks[index],
      status: !state.tasks[index].status,
    };
    let updateTasks = [...state.tasks];
    updateTasks[index] = updateTask;

    let arrangedTasks = arrangedTasksHandler(
      updateTasks,
      state.filterMode,
      state.sortMode.name
    );
    return {
      tasks: updateTasks,
      arrangedTasks: arrangedTasks,
      sortMode: state.sortMode,
      filterMode: state.filterMode,
    };
  }

  if (action.type === "CHANGE_FILTER_MODE") {
    let filterMode = action.filterMode;
    let arrangedTasks = arrangedTasksHandler(
      state.tasks,
      filterMode,
      state.sortMode.name
    );

    return {
      tasks: state.tasks,
      arrangedTasks: arrangedTasks,
      sortMode: state.sortMode,
      filterMode: filterMode,
    };
  }
  if (action.type === "CHANGE_SORT_MODE") {
    let sortMode = action.sortMode;
    let arrangedTasks = arrangedTasksHandler(
      state.tasks,
      state.filterMode,
      sortMode.name
    );
    return {
      tasks: state.tasks,
      arrangedTasks: arrangedTasks,
      sortMode: sortMode,
      filterMode: state.filterMode,
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
  const updateTaskHandler = (id, task) => {
    dispatchTaskAction({ type: "UPDATE", id: id, task: task });
  };
  const changeStatusHandler = (id) => {
    dispatchTaskAction({ type: "CHANGE_STATUS", id: id });
  };
  const changeFilterModeHandler = (filterMode) => {
    dispatchTaskAction({ type: "CHANGE_FILTER_MODE", filterMode: filterMode });
  };
  const changeSortModeHandler = (sortMode) => {
    dispatchTaskAction({ type: "CHANGE_SORT_MODE", sortMode: sortMode });
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(taskState));
  }, [taskState]);
  return (
    <TaskContext.Provider
      value={{
        tasks: taskState.tasks,
        arrangedTasks: taskState.arrangedTasks,
        filterMode: taskState.filterMode,
        sortMode: taskState.sortMode,
        allSortMode: [
          { name: "CreatedTime", index: 1 ,chineseName:'建立時間'},
          { name: "Status", index: 2 ,chineseName:'完成度'},
        ],
        addTask: addTaskHandler,
        removeTask: removeTaskHandler,
        updateTask: updateTaskHandler,
        changeStatus: changeStatusHandler,
        changeFilterMode: changeFilterModeHandler,
        changeSortMode: changeSortModeHandler,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
