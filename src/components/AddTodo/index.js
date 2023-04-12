import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, getTasks } from "../../store/tasksSlices/tasksThunk";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const updateAndThenGet = () => async () => {
    if (title.trim().length === 0) {
      alert("Enter a task before adding !!");
      setTitle("");
      return;
    }
    dispatch(createTask({ title }));
    setTitle("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      alert("Enter a task before adding !!");
      setTitle("");
      return;
    }
    dispatch(createTask({ title }));

    setTitle("");
  };

  return (
    <div>
      <div className="add-todo">
        <input
          type="text"
          className="task-input"
          placeholder="Add task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>

        <button className="task-button" onClick={updateAndThenGet()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TodoList;
