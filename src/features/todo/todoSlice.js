// nanoid just create unique id. It doesn't have any other impact.
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// Reducers have properties and functions.
// We always have an access of state and action so we can use that in our functions and properties.
// Reducer have our properties

// State : Give the current time state , Means what's in the state now.
// Action : action call the function to work. Means what would we do with our state.

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            text: action.payload.text,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
