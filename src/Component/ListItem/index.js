import TaskContext from "../../Store/TaskContext";
import { useState, useContext, useRef, useEffect } from "react";
import {
  StyledListItem,
  Header,
  Status,
  Category,
  CreatedTime,
  DeleteBtn,
  Content,
  Text,
  Input,
} from "./Styles";
const ListItem = (props) => {
  const TaskCtx = useContext(TaskContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [textAreaValue, setTextAreaValue] = useState(props.task);
  const TextRef = useRef();
  const [textHeight, setTextHeight] = useState(null);
  const inputRef = useRef();
  const categorySurface = { Work: "工作", Study: "學習", Other: "其他" };
  useEffect(() => {
    if (isEdit) {
      inputRef.current.style.height = "0px";
      const scrollHeight = inputRef.current.scrollHeight;
      inputRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaValue, isEdit]);

  const changeStatusHandler = () => {
    TaskCtx.changeStatus(props.id);
  };
  const removeTaskHandler = () => {
    setIsHidden(false);
    setTimeout(() => {
      TaskCtx.removeTask(props.id);
    }, 300);
  };
  const editHandler = () => {
    setTextHeight(TextRef.current.clientHeight);
    setIsEdit(true);
    setTimeout(() => {
      inputRef.current.focus();
      inputRef.current.selectionStart = textAreaValue.length;
      inputRef.current.selectionEnd = textAreaValue.length;
      console.log(inputRef.current.selectionEnd);
    }, 0.1);
  };
  const onBlurHandler = () => {
    if (inputRef.current.value.trim() === "") return;
    TaskCtx.updateTask(props.id, inputRef.current.value);
    setIsEdit(false);
  };

  const onKeyPressHandler = (event) => {
    if (event.key === "Enter" && !event.key === "Shift") {
      if (inputRef.current.value.trim() === "") {
        setIsEdit(false);
        return;
      }
      TaskCtx.updateTask(props.id, inputRef.current.value);
      setIsEdit(false);
    }
  };
  const textAreaValueHandler = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <StyledListItem isHidden={isHidden}>
      <Header>
        <Status status={props.status} onClick={changeStatusHandler}>
          {props.status ? "已完成" : "未完成"}
        </Status>
        <Category>{`${categorySurface[props.category]} ･ `}</Category>
        <CreatedTime>{`${new Date(props.created_time).toLocaleString()}`}</CreatedTime>
        <DeleteBtn onClick={removeTaskHandler}>x</DeleteBtn>
      </Header>
      <Content>
        {isEdit ? (
          <Input
            defaultValue={textAreaValue}
            ref={inputRef}
            onBlur={onBlurHandler}
            onKeyPress={onKeyPressHandler}
            onChange={textAreaValueHandler}
            style={{ height: textHeight }}
          ></Input>
        ) : (
          <Text onClick={editHandler} ref={TextRef}>
            {props.task}
          </Text>
        )}
      </Content>
    </StyledListItem>
  );
};
export default ListItem;
