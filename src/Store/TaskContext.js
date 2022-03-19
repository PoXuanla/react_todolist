import React from "react";

const TaskContext = React.createContext({
  tasks: [], //{id, category, task, created_time, status}
  arrangedTasks: [], //篩選且排序過的資料
  filterMode: "All",
  sortMode: "CreatedTime",
  allSortMode: [
    { name: "CreatedTime", index: 1 },
    { name: "Status", index: 2 },
  ],
  addTask: (task) => {},
  removeItem: (id) => {},
  updateTask: (id, data) => {},
  changeStatus: (id) => {}, // true:已完成, false:未完成
  changeFilterMode: (filterMode) => {}, //1. All, 2.Work, 3.Study, 4.Other
  changeSortMode: (sortMode) => {}, // 1. CreatedTime, 2.Status
});

export default TaskContext;
