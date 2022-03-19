import { useContext, useState, useRef } from "react";
import TaskContext from "../../Store/TaskContext";
import { v4 as uuidv4 } from "uuid";
import {
  StyledAddTaskBar,
  Container,
  TextArea,
  Footer,
  CategoryBtn,
  SubmitBtn,
  CategoryGroup,
} from "./Styles";

const AddTaskBar = (props) => {
  const [category, setCategory] = useState("Work");
  const [errorAni, setErrorAni] = useState(false);
  const ref = useRef(null);
  const TaskCtx = useContext(TaskContext);
  const AnimationTime = 500;
  const addTaskHandler = () => {
    let task = ref.current.value;

    if (task.trim().length === 0) {
      setErrorAni(true);
      setTimeout(() => {
        setErrorAni(false);
      }, AnimationTime);
      return;
    }
    TaskCtx.addTask({
      id: uuidv4(),
      category: category,
      task: task,
      created_time: Date.now(),
      status: false,
    });
    ref.current.value = "";
    return;
  };
  const setCategoryHandler = (category) => {
    setCategory(category);
  };
  return (
    <StyledAddTaskBar>
      <Container>
        <TextArea
          name="123"
          id=""
          cols="30"
          rows="10"
          placeholder="管理好每件事情 (*´∀`)~♥"
          autoComplete="off"
          ref={ref}
        ></TextArea>
        <Footer AnimationTime={500}>
          <CategoryGroup>
            <CategoryBtn
              onClick={setCategoryHandler.bind(null, "Work")}
              active={category === "Work"}
            >
              工作
            </CategoryBtn>
            <CategoryBtn
              onClick={setCategoryHandler.bind(null, "Study")}
              active={category === "Study"}
            >
              學習
            </CategoryBtn>
            <CategoryBtn
              onClick={setCategoryHandler.bind(null, "Other")}
              active={category === "Other"}
            >
              其他
            </CategoryBtn>
          </CategoryGroup>
          <SubmitBtn
            onClick={addTaskHandler}
            active={errorAni}
          >
            輸入
          </SubmitBtn>
        </Footer>
      </Container>
    </StyledAddTaskBar>
  );
};

export default AddTaskBar;
