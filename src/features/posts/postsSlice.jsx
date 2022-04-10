import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning Redux Toolkit", content: "I am a content" },
  { id: 2, title: "Using Toolkit", content: "I am a more content" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        //We are not actually mutating the state, since Toolkit uses Immer.js in it's core, preventing us from doing such thing.
        state.push(action.payload);
      },
      // Prepare callback allows you contain logic in order to improve your component legibility.
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
