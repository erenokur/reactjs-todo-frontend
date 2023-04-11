import React, { useState, useEffect } from 'react';
import FormInput from '../../components/FormInput'
import { register } from '../../store/authSlices/authThunk'
import { resetRegisterMessage } from '../../store/authSlices/auth'
import { useSelector, useDispatch } from 'react-redux';
import history from '../../utils/history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const { registerMessage, loading } = useSelector((state) => state.auth);


    useEffect(() => {
        if (!loading && registerMessage) {
            toast(registerMessage)
            dispatch(resetRegisterMessage())
        }
    }, [loading, registerMessage]);

    function GoToLogin() {
        history.push('/login');
    }

    function startRegister() {
        dispatch(register({ username, email, password }));
    }


    return <div className="page">
        <div>
            <h2>Register</h2>
        </div>

        <form >
            <FormInput onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="username" value={username} />
            <FormInput onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email} />
            <FormInput onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
        </form>
        {loading ? <div className="loading"><span>Loading...</span></div> :
            <div>
                <button className="btn" onClick={startRegister} >Register</button>
                <button className="btn" onClick={GoToLogin} >click to login </button>
            </div>
        }

        <ToastContainer />
    </div>;
}

export default Login;