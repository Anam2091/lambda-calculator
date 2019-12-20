import { specials } from '../../../data';
import React, {useState} from "react";
import {SpecialButton} from './SpecialButton'

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setspecialsState] = useState(specials);

  return (
    <div>{
      specialsState.map(function(numberdiff3){
        return <SpecialButton button3={numberdiff3}/>
        
      })
    }
    </div>
  );
};
