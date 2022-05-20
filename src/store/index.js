import { configureStore, createSlice } from '@reduxjs/toolkit';


//createSlice({name, initialState, reducers})
//reducers:({object reducerfunction(state, action)}) is actions
const counterSlice = createSlice({
   name: 'counter',
   initialState : {counter: 0},
   reducers: {
     increment(state, action){ state.counter ++},
     decrement(state, action){ state.counter --},
     add(state, action){ state.counter += action.payload},
     reset(state, action){ state.counter = 0}
   }
})

export const actions = counterSlice.actions;

 const store = configureStore({
   reducer: counterSlice.reducer
})

export default store;


