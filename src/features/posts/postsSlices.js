import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from 'date-fns'

const initialState = [
    {
        content: 'show me Power',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        id: '1',
        title: 'hi ',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        content: 'Show Me Power',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        id: '2',
        title: 'what do you Think ',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]

const postsSlices = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, actions) {
                state.push(actions.payload)

            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        content,
                        date: new Date().toISOString(),
                        id: nanoid(),
                        title,
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
}
)

export const selectAllPosts = (state) => state.posts
export const { postAdded, reactionAdded } = postsSlices.actions

export default postsSlices.reducer
