import TaskProvider from "./Store/TaskProvider";
import { ResetStyle, GlobalStyle } from "./Theme";
import styled from "styled-components";
import AddTaskBar from "./Component/AddTaskBar";
import Task from "./Component/Task";
import FilterAndSortBar from "./Component/FilterAndSortBar";
function App() {
  return (
    // <ThemeProvider theme={theme}>
      <StyledApp>
        <ResetStyle />
        <GlobalStyle />
        <TaskProvider>
          <AddTaskBar/>
          <FilterAndSortBar/>
          <Task/>
        </TaskProvider>
      </StyledApp>
    // </ThemeProvider>
  );
}
const StyledApp = styled.div`
  text-align:center;
  background:#dadfdf;
  height: 100%;

`;
export default App;
