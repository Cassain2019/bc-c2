import React, { useReducer } from 'react';
import numberReducer from './numberReducer';


function PChild2() {
    let [state, dispatch] = useReducer(numberReducer, 52);
    return (
        <div>
            Hello World from Child2 = {state}
            <br></br>
            <button onClick={()=>{dispatch({type:"INCREMENT"});}}>Increment</button>
            <button onClick={()=>{dispatch({type:"DECREMENT", val:10});}}>Decrement</button>
        </div>
  );
}

export default PChild2;
