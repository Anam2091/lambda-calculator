import React, {useState} from "react";
import { numbers } from '../../../data';
import { NumberButton } from './NumberButton'
const display = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent:'space-around',
  marginLeft:'25px',
  marginRight:'25px'
  
}



//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div style={display}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       numberState.map(function(numberdiff) {
        return <NumberButton button={numberdiff}/>  
      })
       
       }
    </div>
  );
};


