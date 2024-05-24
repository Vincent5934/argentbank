import { createSlice } from '@reduxjs/toolkit'

 
const initialState = { 
    token: null, 
    user: null 
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogs: (state, action) => {
            state.token = action
        },
        setUser: (state, action) => {
            state.user = action
        },
        disconnect: (state) =>{
            state.token = initialState.token;
            state.user = initialState.user;
        }
    },
})

export const {setLogs, setUser, disconnect} = userSlice.actions
export const selectToken = state => state.token
export const selectUser = state => state.user

export default userSlice.reducer