import {useDispatch, useSelector} from 'react-redux'


function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch(); //dispatch(action)

  const increment = ()=> { dispatch({type: "INCREMENT"})}
  const decrement = ()=> { dispatch({type: "DECREMENT"})}

  const add = ()=> { dispatch({type:"ADD" , payload: 10 })}
  const reset =()=> {dispatch({type: "RESET"})}

  return (
   <div>
     <h1>Counter App</h1>
     <h2>{counter}</h2>  

     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={add}>Add 10</button>
     <button onClick={reset}>Reset</button>
   </div>
  );
}

export default App;
