import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/posts/postsSlices"

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})