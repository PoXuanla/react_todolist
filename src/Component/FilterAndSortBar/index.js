import {
  Section,
  Container,
  FilterBar,
  FilterBtn,
  SortBar,
  SortSelect,
  SortList,
} from "./Styles";

import { useState, useContext, useRef, useEffect } from "react";
import TaskContext from "../../Store/TaskContext";

const FilterAndSortBar = () => {
  const [sortListActive, setsortListActive] = useState(false);
  const selectRef = useRef(null);
  const TaskCtx = useContext(TaskContext);
  const [listMode, setListMode] = useState(null); //not selected mode
  const [sortModeLi, setSortModeLi] = useState(null);
  useEffect(() => {
    setListMode(
      TaskCtx.allSortMode.filter((mode) => mode.name !== TaskCtx.sortMode.name)
    );
  }, [TaskCtx.allSortMode, TaskCtx.sortMode]);

  useEffect(() => {
    if (listMode !== null) {
      const sortModeLi = listMode.map((item) => {
        return (
          <li key={item.index} onMouseDown={changeSortMode.bind(null, item)}>
            {item.chineseName}
          </li>
        );
      });
      setSortModeLi(sortModeLi);
    }
  }, [listMode]);
  const sortListActiveHandler = (e) => {
    if (!sortListActive) selectRef.current.focus();
    setsortListActive((prev) => !prev);
  };
  const changeSortMode = (mode) => {
    TaskCtx.changeSortMode(mode);
  };
  const selectBlurHandler = () => {
    setsortListActive(false);
  };

  const changeFilterMode = (mode) => {
    TaskCtx.changeFilterMode(mode);
  };
  return (
    <Section>
      <Container>
        <FilterBar>
          <FilterBtn
            active={TaskCtx.filterMode === "All"}
            onClick={changeFilterMode.bind(null, "All")}
          >
            全部
          </FilterBtn>
          <FilterBtn
            active={TaskCtx.filterMode === "Work"}
            onClick={changeFilterMode.bind(null, "Work")}
          >
            工作
          </FilterBtn>
          <FilterBtn
            active={TaskCtx.filterMode === "Study"}
            onClick={changeFilterMode.bind(null, "Study")}
          >
            學習
          </FilterBtn>
          <FilterBtn
            active={TaskCtx.filterMode === "Other"}
            onClick={changeFilterMode.bind(null, "Other")}
          >
            其他
          </FilterBtn>
        </FilterBar>
        <SortBar>
          <p>排序依</p>
          <SortSelect>
            <input
              ref={selectRef}
              type="button"
              defaultValue={TaskCtx.sortMode.chineseName}
              onClick={sortListActiveHandler}
              onBlur={selectBlurHandler}
            ></input>
          </SortSelect>
          <SortList active={sortListActive}>{sortModeLi}</SortList>
        </SortBar>
      </Container>
    </Section>
  );
};
export default FilterAndSortBar;
