import React from 'react';
import PChild from './PChild'
function Parent(props) {
    return (
        <div>
            Hello World from Parents
            <PChild num={props.num}>

            </PChild>
        </div>
  );
}

export default Parent;
