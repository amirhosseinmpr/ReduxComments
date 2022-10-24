import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    { id: '1', title: 'hellow newFearnde ', content: 'show me Power' },
    { id: '2', title: 'what do you Think ', content: 'I am Try To Learn You Show Me Power' }
]

const postsSlices = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, actions) {
                state.push(actions.payload)

            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    }
                }
            }
        },
    }
}
)

export const selectAllPosts = (state) => state.posts
export const { postAdded } = postsSlices.actions

export default postsSlices.reducer
