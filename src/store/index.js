import {createStore } from 'redux'

const reducerFn = (state= {counter: 0}, action) => {
   return state;
}
const store = createStore(reducerFn);

export default store;

//action 2property type n payload