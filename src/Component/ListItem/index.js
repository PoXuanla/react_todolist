import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import TaskContext from "../../Store/TaskContext";
import { useState, useContext, useRef } from "react";
import { StyledListItem } from "./Styles";
const ListItem = (props) => {
  const TaskCtx = useContext(TaskContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [progressAnimation, setProgressAnimation] = useState(false);

  const inputRef = useRef();
  
  const changeProgressHandler = () => {
    TaskCtx.changeStatus(props.id);
    setProgressAnimation(true);

    const time = setTimeout(() => {
      setProgressAnimation(false);

      clearTimeout(time);
    }, 200);
  };

  const removeTaskHandler = () => {
    setIsHidden(false);
    setTimeout(() => {
      TaskCtx.removeTask(props.id);
    }, 300);
  };
  const editHandler = () => {
    setIsEdit(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 1);
  };
  const onBlurHandler = () => {
    TaskCtx.editTask(props.id, inputRef.current.value);
    setIsEdit(false);
  };
  const contentDBClickHandler = () => {
    setIsEdit(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 1);
  };
  const onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      TaskCtx.editTask(props.id, inputRef.current.value);
      setIsEdit(false);
    }
  };
  const notFinishBtn = (
    <button
      className={`ProgressBtn ${progressAnimation ? "exit" : ""}  `}
      onClick={changeProgressHandler}
    >
      <FontAwesomeIcon
        icon={faCircle}
        style={{
          width: "100%",
          height: "100%",
          color: "#d0b0b0",
          cursor: "pointer",
          filter: "drop-shadow(2px 2px .5px rgba(0,0,0,.5))",
        }}
      />
    </button>
  );
  const FinishBtn = (
    <button
      className={`ProgressBtn ${progressAnimation ? "exit" : ""}`}
      onClick={changeProgressHandler}
    >
      <FontAwesomeIcon
        icon={faCheck}
        style={{
          width: "100%",
          height: "100%",
          color: "#d0b0b0",
          cursor: "pointer",
          filter: "drop-shadow(2px 2px .5px rgba(0,0,0,.5))",
        }}
      />
    </button>
  );
  return (
    <StyledListItem isHidden={isHidden}>
      {props.finish ? FinishBtn : notFinishBtn}

      <div className="Category">{props.category}</div>
      <div className="Task">
        {
          <input
            defaultValue={props.task}
            ref={inputRef}
            style={{ display: isEdit ? " " : "none" }}
            // display={isEdit ? " " : "none"}
            onBlur={onBlurHandler}
            onKeyPress={onKeyPressHandler}
          />
        }
        {!isEdit ? (
          <div
            onDoubleClick={contentDBClickHandler}
            style={{ userSelect: "none", color: "#3f3f3f" }}
          >
            {props.task}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <button onClick={editHandler} className="EditBtn">
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>
        <button onClick={removeTaskHandler} className="EditBtn">
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </StyledListItem>
  );
};
export default ListItem;
