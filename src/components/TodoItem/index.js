import React from "react";
import { useDispatch } from "react-redux";
import {
  getTasks,
  deActivateTask,
  markDone,
  markUnDone,
} from "../../store/tasksSlices/tasksThunk";
const TodoList = ({ _id, title, completed }) => {
  const dispatch = useDispatch();
  const CheckThenGet = () => async () => {
    console.log("given ID " + _id);
    if (completed) {
      dispatch(markUnDone({ _id }));
    } else {
      dispatch(markDone({ _id }));
    }
  };

  const DeleteThenGet = () => async () => {
    dispatch(deActivateTask({ _id }));
  };

  return (
    <div>
      <li className="task-item">
        <input type="checkbox" checked={completed} onChange={CheckThenGet()} />
        <div
          style={{
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            textAlign: "left",
          }}
        >
          {completed ? (
            <div
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                textAlign: "left",
              }}
            >
              <span
                style={{ textDecoration: "line-through", textAlign: "left" }}
              >
                {title}
              </span>
            </div>
          ) : (
            title
          )}
        </div>
        <div>
          <button className="remove-task-button" onClick={DeleteThenGet()}>
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoList;
