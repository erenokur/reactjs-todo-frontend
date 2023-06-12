import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getTasks = createAsyncThunk("task/getTasks", async (payload) => {
  try {
    const response = await api.get("/task/getTasks");
    return response.data;
  } catch (e) {
    return null;
  }
});

export const createTask = createAsyncThunk(
  "task/createTask",
  async (payload) => {
    const response = await api.post("/task/createTask", payload);
    return response.data;
  }
);

export const deActivateTask = createAsyncThunk(
  "task/deActivateTask",
  async (payload) => {
    const response = await api.post("/task/deActivateTask", payload);
    return response.data;
  }
);

export const markDone = createAsyncThunk("task/markDone", async (payload) => {
  const response = await api.post("/task/markDone", payload);
  return response.data;
});

export const markUnDone = createAsyncThunk(
  "task/markUnDone",
  async (payload) => {
    const response = await api.post("/task/markUnDone", payload);
    return response.data;
  }
);
