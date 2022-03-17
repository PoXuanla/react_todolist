import React from "react";

const TaskContext = React.createContext({
    tasks: [],
    filterMode:'createdTime',
    addTask: (task) => {},
    removeItem: (id)=>{},
    editTask: (id,data)=>{},
    changeStatus: (id) =>{},
    changeFilterMode:(filterMode)=>{}
})

export default TaskContext;