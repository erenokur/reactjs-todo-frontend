import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../store/authSlices/authThunk';
import { gettasks } from '../../store/tasksSlices/tasksThunk'
import TodoList from '../../components/TodoList'
import AddTodo from '../../components/AddTodo'
import group from '../../img/group.svg';
const Home = () => {
    const dispatch = useDispatch();
    const { userName } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(gettasks());
    }, []);


    return <div className="page">
        <div className="panel panel-default">
            <img className="img-Group" src={group}></img>
            <div>
                <button className="logout-button" onClick={() => dispatch(signOut())} >Sign Out</button>
            </div>
            <div className="panel-heading text-lg">{userName} todo list</div>
            <AddTodo />
            <TodoList />
        </div>
    </div>;
}

export default Home;