import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userId: "",
  id: "",
  title: "",
  completed: "",
};

export const KEY_TASK = 'TASK';


const Tasks = createSlice({
  name: 'TASK',
  initialState: [initialState],
  reducers: {
    getTaskSlice: (state, action) => {
      state = action.payload
      return state
    },
    addTasklice: (state, action) => {
      state.push(action.payload)
      return state
    },
    editTasklice: (state, action) => {
      state = state.map(i => i.id == action.payload.id ? action.payload : i)
      return state
    },
    deleteTasklice: (state, action) => {
      state = state.filter(i => i.id !== action.payload)
      return state
    }
  }
})
export const { getTaskSlice, addTasklice, editTasklice, deleteTasklice } = Tasks.actions
export default Tasks.reducer










