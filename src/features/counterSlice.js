import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState: 0,
    reducers: {
       add : (state , payload) => {
            state + 1 
       }
    }

})

export { add } from counterSlice.action

export default counterSlice.reducer