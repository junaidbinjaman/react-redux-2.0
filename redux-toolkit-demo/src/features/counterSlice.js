import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers: {
        increment: (state) => {
            return (state.count += 1);
        },
        decrement: (state) => {
            return (state.count -= 1);
        },
        incrementByAmount: (state, action) => {
            return (state.count += action.payload);
        },
    },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
