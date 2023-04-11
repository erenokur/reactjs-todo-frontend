import { createAsyncThunk } from '@reduxjs/toolkit'
import { getToken, removeToken, setToken } from '../../utils/HelperFunctions';
import api from '../../services/api';
import history from '../../utils/history';

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, { rejectWithValue }) => {
    try {
        const accessToken = getToken();
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        const response = await api.get('/auth/getuserdata');
        return response.data;
    } catch (e) {
        console.log("GANGER reeemoved")
        removeToken();
        return rejectWithValue('');
    }
});

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await api.post('/auth/login', payload);
    setToken(response.data.accessToken);
    history.push('/home');
    return response.data;
});

export const register = createAsyncThunk('auth/register', async (payload) => {
    const response = await api.post('/auth/register', payload);
    history.push('/home');
    return response.data;
});


export const signOut = createAsyncThunk('auth/signOut', async () => {
    removeToken();
});