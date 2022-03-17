import { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TaskContext from "../../Store/TaskContext";
import { v4 as uuidv4 } from "uuid";
import { StyledAddTaskBar, Container, Button, CategoryGroup } from "./Styles";
import AddTaskInput from "../AddTaskInput";

import useRWD from "../../CustomHook/useRWD";

const AddTaskBar = (props) => {
  const [categoryActive, setcategoryActive] = useState("Work");
  const device = useRWD();
  const ref = useRef(null);

  const TaskCtx = useContext(TaskContext);

  const addTaskHandler = () => {
    let task = ref.current.getInputValue();

    if (task.trim().length === 0) {
      ref.current.triggerErrorAlert();
      return;
    }
    TaskCtx.addTask({
      id: uuidv4(),
      category: categoryActive,
      task: task,
      created_time: Date.now(),
      finish: false,
    });
    return
  };

  const categoryActiveHandler = (category) => {
    setcategoryActive(category);
  };
  return (
    <StyledAddTaskBar>
      <Container>
        <CategoryGroup>
          <button
            className={categoryActive === "Work" ? "active" : ""}
            onClick={categoryActiveHandler.bind(null, "Work")}
          >
            Work
          </button>
          <button
            className={categoryActive === "Study" ? "active" : ""}
            onClick={categoryActiveHandler.bind(null, "Study")}
          >
            Study
          </button>
          <button
            className={categoryActive === "Other" ? "active" : ""}
            onClick={categoryActiveHandler.bind(null, "Other")}
          >
            Other
          </button>
        </CategoryGroup>

        <AddTaskInput
          id="Task"
          ref={ref}
          width={device === "PC" ? "50%" : "80%"}
          animationTime={300}
        />
        <Button onClick={addTaskHandler}>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "white", cursor: "pointer" }}
          />
        </Button>
      </Container>
    </StyledAddTaskBar>
  );
};

export default AddTaskBar;
