import { createSlice } from "@reduxjs/toolkit"

const initialState =[]


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            // Redux new Method
            state.push(action.payload)
        },
        remove(state, action){
            state = state.filter(itme => itme.id !== action.payload)
        }
    }
})


export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;