import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function PChild(props) {
    let abc1 = useContext(ValueContext)
    return (
        <div>
            Hello World from Child {props.num}
            <br></br>
            Hello World from Child Value Context = {abc1}
            <br></br>
            <button onClick={()=>{abc1[1](++abc1[0])}}>ValueContext Button</button>
        </div>
  );
}

export default PChild;
