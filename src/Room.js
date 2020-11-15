import React, {useState} from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(24);
    
    function updateLit() {
        setLit(!isLit); 
    }   
    //Another Style of Defining Function
    const updateAge= () => {
        setAge(++age);
    }
    return (
        //<div className={"room "+(isLit? "lit":"dark")}> ( There are another method )  
        <div className={`room ${isLit? "lit":"dark"}`}>
              This is a Room Component : Lit is {isLit? "Lit" : "Dark"}
              <br></br>
                <button onClick ={updateLit}>Toggle Button</button>
              <br></br>
                Your age is {age}
              <br></br>
              <button onClick ={updateAge}>Increase Age</button>
        </div>
  );
}

export default Room;
