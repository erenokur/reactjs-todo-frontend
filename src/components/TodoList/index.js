import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from "../TodoItem"

const TodoList = () => {
    const { taskList } = useSelector((state) => state.tasks);

    return <div >
        <ul className="tasks-list">
            {
                taskList.map && taskList.map(todo =>
                    <TodoItem key={todo._id} {...todo} />
                )
            }
        </ul>
    </div >;
}

export default TodoList;