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
        disconnect: (state, action) =>{
            state.token = initialState.token;
            state.user = initialState.user;
        }
    },
})
const { actions, reducer } = userSlice
export const {setLogs, setUser, disconnect} = actions
export const selectToken = state => state.token
export const selectUser = state => state.user

export default reducer