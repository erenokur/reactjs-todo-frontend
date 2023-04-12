import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeToken, setToken } from "../../utils/tokenStorage";
import api from "../../services/api";
import history from "../../utils/history";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/getUserData");
      return response.data;
    } catch (e) {
      removeToken();
      return rejectWithValue("");
    }
  }
);

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await api.post("/auth/login", payload);
  setToken(response.data.accessToken);
  history.push("/home");
  return response.data;
});

export const register = createAsyncThunk("auth/register", async (payload) => {
  const response = await api.post("/auth/register", payload);
  history.push("/home");
  return response.data;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
  removeToken();
});
