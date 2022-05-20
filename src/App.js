import {useDispatch, useSelector} from 'react-redux'
import {actions } from './store/index'; //action = counterSlice.action 


function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch(); //dispatch(action)

  const increment = ()=> { dispatch(actions.increment())}
  const decrement = ()=> { dispatch(actions.decrement())}

  const add = ()=> { dispatch(actions.add(10))}
  const reset =()=> {dispatch(actions.reset())}

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
