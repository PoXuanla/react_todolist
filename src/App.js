import TaskProvider from "./Store/TaskProvider";
import { ResetStyle, GlobalStyle } from "./Theme";
import styled from "styled-components";
import AddTaskBar from "./Component/AddTaskBar";
import Task from "./Component/Task";
import FilterBar from "./Component/FilterBar";

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <StyledApp>
        <ResetStyle />
        <GlobalStyle />
        <TaskProvider>
          <AddTaskBar/>
          <FilterBar/>
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
  @media only screen and (max-width: 768px) {
    
  }
`;
export default App;
