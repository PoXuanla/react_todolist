import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./Component/DashBoard";
import TaskProvider from "./Store/TaskProvider";
function App() {
  return (
    <TaskProvider>
      <div className="App">
        <DashBoard />
      </div>
    </TaskProvider>
  );
}

export default App;
