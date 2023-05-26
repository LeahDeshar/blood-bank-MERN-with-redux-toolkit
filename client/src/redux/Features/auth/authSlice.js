import {createSlice} from "@reduxjs/toolkit"


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user:null,
        token: null,
        error: null
    },
    reducers:{
    }

})
export default authSlice;