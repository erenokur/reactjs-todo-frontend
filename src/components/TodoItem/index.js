import React from 'react';
import { useDispatch } from 'react-redux';
import { gettasks, deactivatetask, markdone, markundone } from '../../store/tasksSlices/tasksThunk'
const TodoList = ({ _id, title, completed }) => {
    const dispatch = useDispatch();
    const CheckThenGet = () => async () => {
        console.log("given ID " + _id)
        if (completed) {
            await dispatch(markundone({ _id }));
        } else {
            await dispatch(markdone({ _id }));
        }

        await dispatch(gettasks());

    }

    const DeleteThenGet = () => async () => {
        console.log("GANGER ")
        await dispatch(deactivatetask({ _id }));
        await dispatch(gettasks());
    }

    return <div >
        <li className="task-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={
                    CheckThenGet()
                }
            />
            <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', textAlign: 'left' }}>
                {
                    completed ?
                        <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', textAlign: 'left' }}>
                            < span style={{ textDecoration: 'line-through', textAlign: 'left' }}>
                                {title}
                            </span>
                        </div> :
                        title
                }
            </div >
            <div>
                <button className="remove-task-button" onClick={
                    DeleteThenGet()
                }>Delete</button>
            </div>
        </li >
    </div >;
}

export default TodoList;