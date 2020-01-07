import React from "react";

const background = {
  background: 'lightblue',
  height: '100px',
  width: '100px',
  borderRadius: '50%',
 
}

export const SpecialButton = (props) => {
  return (
  <div>
  <button style={background}>{props.button3}</button>
  </div>
  );
};
