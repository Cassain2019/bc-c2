import React from 'react';
import PChild from './PChild'
import PChild2 from './PChild2';
function Parent(props) {
    return (
        <div>
            Hello World from Parents
            <PChild num={props.num}></PChild>
            <PChild2></PChild2>
        </div>
  );
}

export default Parent;
