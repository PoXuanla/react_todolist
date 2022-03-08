import React from "react";

const TaskContext = React.createContext({
    tasks: [],
    addTask: (task) => {},
    removeItem: (id)=>{},
    editTask: (id,data)=>{},
})

export default TaskContext;