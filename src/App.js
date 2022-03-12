import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./Component/DashBoard";
import TaskProvider from "./Store/TaskProvider";
import {ResetStyle, GlobalStyle} from './Component/globalStyle'

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <ResetStyle/>
        <GlobalStyle/>
        <DashBoard />
      </div>
    </TaskProvider>
  );
}

export default App;
