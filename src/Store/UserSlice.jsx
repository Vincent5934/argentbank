import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk(
    "user/loginUser",
    async(userCredentials) => {
        let request = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(userCredentials)
        })
        let result = await request.json()
        console.log(result)
        if(result.status === 200){
            let profileUser = await fetch('http://localhost:3001/api/v1/user/profile',{
                method:'post',
                headers:{'Authorization' : `Bearer ${result.body.token}`},
                
            })
           
            let profileResult = await profileUser.json()
            console.log(profileResult)
        }
    }
) 



const userSlice = createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:null,
        error:null
    },
extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.user = null
        state.error = null
    })
    .addCase(loginUser.fulfilled, (state,action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
    })
    .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.user = null
        console.log(action.error.message)
        if(action.error.message === "Request failed with status code 401")
        state.error = "Acces denied! Invalid Credentials"
        else {
            state.error = action.error.message
        }
    })
}
})
export default userSlice.reducer