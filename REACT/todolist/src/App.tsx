import { useSelector } from "react-redux";
import { useTheme } from "./Context/ThemeContext";
import { RootState } from "./state/store";
import TaskInput from "./screens/TaskInput";
import TaskList from "./screens/TaskList";
import "./Css/index.css";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className={`app-${theme}`}>
      <header>
        <h1>Task Manager</h1>
        <div>Task Count : {tasks.length}</div>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
