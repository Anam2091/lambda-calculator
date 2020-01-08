import { specials } from '../../../data';
import React, {useState} from "react";
import {SpecialButton} from './SpecialButton'
const display3 = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent:'space-around',
  

}

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setspecialsState] = useState(specials);

  return (
    <div style={display3}>{
      specialsState.map(function(numberdiff3){
        return <SpecialButton button3={numberdiff3}/>
        
      })
    }
    </div>
  );
};
