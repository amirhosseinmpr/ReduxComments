import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/posts/postsSlices"
import usersReducer from "../features/users/usersSlices"

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})