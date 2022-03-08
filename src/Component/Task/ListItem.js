import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import TaskListLiInput from "./ListLiInput";
import TaskContext from "../../Store/TaskContext";
import { useState, useContext, useRef } from "react";

const ListItem = (props) => {
  const TaskCtx = useContext(TaskContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const inputRef = useRef();

  const removeTaskHandler = () => {
    setIsHidden(false);
    setTimeout(() => {
      TaskCtx.removeTask(props.id);
    }, 1000);
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
  return (
    <StyledListItem isHidden={isHidden}>
      <div className="Category">{props.category}</div>
      <div className="Task">
        {
          <input
            className="Input"
            defaultValue={props.task}
            ref={inputRef}
            style={{ display: isEdit ? " " : "none" }}
            // display={isEdit ? " " : "none"}
            onBlur={onBlurHandler}
            onKeyPress={onKeyPressHandler}
          />
        }
        {!isEdit ? (
          <div onDoubleClick={contentDBClickHandler} style={{ userSelect: "none" }}>
            {props.task}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <button onClick={editHandler}>
          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
        </button>
        <button onClick={removeTaskHandler}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  animation: ${(props) =>
    props.isHidden ? "fadein .5s linear" : "fadeout 1s linear"};
  @-webkit-keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  .Category {
    width: 10%;
    height: 30px;
    background-color: #ffab38;
    border-radius: 20px;
    line-height: 30px;
    font-size: 10px;
    color: #faf9fb;
  }
  .Task {
    width: 70%;
    height: 35px;
    background: white;
    border-radius: 10px;
    line-height: 35px;
    text-align: center;
  }
  .Input {
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }
  button {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 0;
    margin: 0 0px;
    &:not(:last-of-type) {
      margin:3px 5px 0 0 ;
    }
  }
`;

export default ListItem;
