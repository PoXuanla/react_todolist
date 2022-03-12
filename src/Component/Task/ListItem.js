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

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
  animation: ${(props) =>
    props.isHidden ? "fadein .5s linear" : "fadeout 1s linear"};
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
    height: 3rem;

    background-color: #d0b0b0;
    border-radius: 2rem;
    line-height: 3rem;
    font-size: 1.4rem;
    color: #3f3f3f;
    box-shadow: .2rem .2rem .2rem .1rem rgba(0, 0, 0, 0.2);
  }
  .Task {
    width: 70%;
    height: 3.5rem;
    background: #3f3f3f;
    border-radius: 1rem;
    line-height: 3.5rem;
    text-align: center;
    background-color: #dadfdf;
    box-shadow: .2rem .2rem .2rem .1rem rgba(0, 0, 0, 0.2);
  }
  .Input {
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #dadfdf;
    color: #3f3f3f;
  }
  button {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    border: 0;
    margin: 0 0px;
    box-shadow: .2rem .2rem .2rem .1rem rgba(0, 0, 0, 0.2);
    background-color: #dadfdf;

    &:not(:last-of-type) {
      margin: .3rem .5rem 0 0;
    }
    transition: 0.4s;
    &:hover {
      background-color: #92a3a2;
    }
  }
`;

export default ListItem;
