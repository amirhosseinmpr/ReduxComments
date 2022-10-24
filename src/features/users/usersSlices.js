import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'amir' },
    { id: '1', name: 'amirhossein' },
    { id: '2', name: 'amirhosseinmpr' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
