import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action){
            const existIndex = Number(state.findIndex(item => item.id === action.payload.id));
            if(existIndex === -1){
                action.payload.count = 1;
                state.push(action.payload);
            }
            else{
                state[existIndex].count++;
            }
        }
    }
});

export default cartSlice.reducer;