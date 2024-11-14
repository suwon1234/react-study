import React, { useState } from 'react';
import font from '../../../modules/font';
import { useDispatch, useSelector } from 'react-redux';

const FontInputComponent = () => {
  const font=useSelector((state)=>state.inputFontSize);
  const [inputFontSize,setInputFontSize]=useState("");
  const OnChangeFontSize=(e)=>{
    setInputFontSize(e.target.value)

  }
  const dispatch=useDispatch();
  return (
    <div>
      <p>{font}</p>
      <input type='text' onChange={OnChangeFontSize} value={inputFontSize}></input>
      <button onClick={()=>{dispatch(inputFontSize)}}>사이즈 변경</button>
      
    </div>
  );
};

export default FontInputComponent;