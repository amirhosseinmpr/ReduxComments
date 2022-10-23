import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '1', title: 'hellow newFearnde ', content: 'show me Power' },
    { id: '2', title: 'what do you Think ', content: 'I am Try To Learn You Show Me Power' }
]

const postsSlices = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})
export const selectAllPosts = (state) => state.posts

export default postsSlices.reducer
