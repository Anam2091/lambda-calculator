import React, {useState} from "react";
import { operators } from '../../../data';
import {OperatorButton} from './OperatorButton'
//import any components needed
const display2 = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  
}

//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setoperatorsState] = useState(operators);
  return (
    <div style={display2}>{

      operatorsState.map(function(numberdiff2) {
        return <OperatorButton button2={numberdiff2.char}/>
      })
      
    }
    </div>
    
  
    
      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

    
  );
};
