import React, {useState} from 'react';

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
          <div>
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
