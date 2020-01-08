import React from "react";
const background = {
  background: 'teal',
  height: '100px',
  width: '100px',
  borderRadius: '50%',
  fontSize:'50px',
  marginBottom:'30px',
  marginTop:'10px'
  
}

export const NumberButton = (props) => {
  return (
    <div>
    <button style={background}> {props.button}</button>
</div>
      /* Display a button element rendering the data being passed down from the parent container on props */
    
  );
};
