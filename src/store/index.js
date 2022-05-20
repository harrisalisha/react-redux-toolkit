import {createStore } from 'redux'

const reducerFn = (state= {counter: 0}, action) => {
  
   //Syncronous Function
   //we should not mutate original state

   if(action.type =="INCREMENT"){
     return { counter : state.counter+1};
   }
   if(action.type === "DECREMENT"){
      //if(state.counter <= 0){
      //   return {counter: state.counter};
      //}

      return {counter: state.counter-1};
   }

   return state;
}
const store = createStore(reducerFn);

export default store;

//action 2property type n payload