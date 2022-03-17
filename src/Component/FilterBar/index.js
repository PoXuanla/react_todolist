import {
  StyledFilterBar,
  Container,
  Button,
  FilterSelect,
  Bar,
} from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import TaskContext from "../../Store/TaskContext";

const FilterBar = () => {
  const [showFilterSelect, setShowFilterSelect] = useState(false);
  const filterCategory = ["CreatedTime", "Status"];
  const TaskCtx = useContext(TaskContext);

  const showFilterSelectHandler = () => {
    setShowFilterSelect((prev) => !prev);
  };
  const changeFilterModeHandler = (e) => {
    setShowFilterSelect((prev) => !prev);
    console.log(e.target.value)
    setTimeout(() => {
        TaskCtx.changeFilterMode(e.target.value)
    }, 250);
  };
  return (
    <StyledFilterBar>
      <Container>
        <Bar>
          <Button onClick={showFilterSelectHandler}>
            <label>{TaskCtx.filterMode}</label>
            <FontAwesomeIcon
              icon={faFilter}
              style={{
                color: "white",
                cursor: "pointer",
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translate(0, -50%)",
              }}
            />
          </Button>
          <FilterSelect
            className="filterSelect"
            active={showFilterSelect}
            onClick={changeFilterModeHandler}
            value={filterCategory.filter(
              (category) => category !== TaskCtx.filterMode
            )}
          >
            {filterCategory.filter(
              (category) => category !== TaskCtx.filterMode
            )}
          </FilterSelect>
        </Bar>
      </Container>
    </StyledFilterBar>
  );
};
export default FilterBar;
