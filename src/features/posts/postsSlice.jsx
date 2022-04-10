import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'Learning Redux Toolkit', content: 'I am a content'},
    {id: 2, title: 'Using Toolkit', content: 'I am a more content'},
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export default postsSlice.reducer
