import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../state/Slices/TaskSlice";

const TaskInput = () => {
  const inputRef:any = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      dispatch(addTask(inputRef.current.value));
      inputRef.current.value = "";
    }
  };

  return (
    <div className="taskInput">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter todo here..." />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;
