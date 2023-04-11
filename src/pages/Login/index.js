import React, { useState, useEffect } from 'react';
import { getToken } from '../../utils/HelperFunctions';
import FormInput from '../../components/FormInput'
import { login } from '../../store/authSlices/authThunk'
import { resetLoginMessage } from '../../store/authSlices/auth'
import { useSelector, useDispatch } from 'react-redux';
import history from '../../utils/history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const { token, loading, userData, loginMessage } = useSelector((state) => state.auth);

    if (token || getToken()) {
        toast("Welcome " + userData)
        console.log(getToken())
        history.push('/home');
    }
    useEffect(() => {
        if (!loading && loginMessage) {
            toast(loginMessage)
            dispatch(resetLoginMessage())
        }

    }, [loading, loginMessage]);


    function GoToRegister() {
        history.push('/register');
    }
    function startLogin() {
        dispatch(login({ email, password }));
    }

    return <div className="page">
        <div>
            <h2>Login</h2>
        </div>

        <form >
            <FormInput onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email} />
            <FormInput onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />

        </form>
        {loading ? <div className="loading"><span>Loading...</span></div> :
            <div>
                <button className="btn" onClick={startLogin} >Login</button>
                <button className="btn" onClick={GoToRegister} >click to create acount</button>
            </div>
        }
        <ToastContainer />
    </div>;
}

export default Login;