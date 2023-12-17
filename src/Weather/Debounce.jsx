import React, { useState,useEffect } from 'react';
import { useDebounce } from 'use-debounce';

const Debounce = () => {
    const [text, setText] = useState('');
   
    const [value] = useDebounce(text, 3000);
    
// console.log("i m text",text);
useEffect(() => {
 

    console.log("i m value",value);
}, [value])


  return (
    <div>
      <div>
      <input
       
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {/* <p>Actual value: {text}</p> */}
      <p>Debounce value: {value}</p>
     
    </div>
    </div>
  )
}

export default Debounce
