import React from "react";
const background = {
  background: 'blue'
}
export const OperatorButton = (props) => {
  return (
    <div>
  <button style={background}>{props.button2}</button>
  </div>
      /* Display a button element rendering the data being passed down from the parent container on props */
   
  );
};
