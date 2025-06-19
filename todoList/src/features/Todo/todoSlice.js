import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: state.todos.length + 1, text: action.payload });
    },
    removeTodo: (state, action) => {
      return state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
