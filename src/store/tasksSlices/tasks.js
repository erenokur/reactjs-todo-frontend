import { createSlice } from "@reduxjs/toolkit";
import {
  getTasks,
  createTask,
  deActivateTask,
  markDone,
  markUnDone,
} from "./tasksThunk";

const initialState = {
  loading: false,
  taskList: {},
  createTaskMessage: "",
  markDoneMessage: "",
  markUnDoneMessage: "",
  markDeActivateMessage: "",
};

export const tasksSlices = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    [getTasks.pending]: (state, action) => {
      state.loginMessage = "";
      state.loading = true;
    },
    [getTasks.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.taskList = data;
      state.loading = false;
    },
    [getTasks.rejected]: (state, action) => {
      state.loginMessage = "Could not get the list.";
      state.loading = false;
    },
    [createTask.pending]: (state, action) => {
      state.loading = true;
    },
    [createTask.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.taskList = data;
      state.loading = false;
    },
    [createTask.rejected]: (state, action) => {
      state.createTaskMessage = "Could not add task.";
      state.loading = false;
    },
    [deActivateTask.pending]: (state, action) => {
      state.markDeActivateMessage = "";
      state.loading = true;
    },
    [deActivateTask.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.taskList = data;
      state.loading = false;
    },
    [deActivateTask.rejected]: (state, action) => {
      state.markDeActivateMessage = "Could not delete task.";
      state.loading = false;
    },
    [markDone.pending]: (state, action) => {
      state.markDoneMessage = "";
      state.loading = true;
    },
    [markDone.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.taskList = data;
      state.loading = false;
    },
    [markDone.rejected]: (state, action) => {
      state.markDoneMessage = "Could not change task.";
      state.loading = false;
    },
    [markUnDone.pending]: (state, action) => {
      state.markUnDoneMessage = "";
      state.loading = true;
    },
    [markUnDone.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.taskList = data;
      state.loading = false;
    },
    [markUnDone.rejected]: (state, action) => {
      state.markUnDoneMessage = "Could not change task.";
      state.loading = false;
    },
  },
});

export const {} = tasksSlices.actions;

export default tasksSlices.reducer;
