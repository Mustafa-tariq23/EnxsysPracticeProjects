import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { toggleTask, deleteTask } from "../state/Slices/TaskSlice";
import { useEffect } from "react";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="indivisual-task" key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <input type="checkbox" name="task" id="task"
                onClick={() => dispatch(toggleTask(task.id))}
              />
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
  );
};

export default TaskList;
