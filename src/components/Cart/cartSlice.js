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
        },
        removeItem(state, action){
            return state.filter((item) => item.id !== action.payload);
        },
        changeCount(state, action){
            const index = state.findIndex(item => item.id === action.payload.id);
            if(state[index].count + action.payload.amount === 0){
                return state;
            }
            else{
                state[index].count += action.payload.amount;
            }
        }
    }
});

export default cartSlice.reducer;