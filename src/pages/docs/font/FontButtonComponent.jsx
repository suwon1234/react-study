import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changefive, changetwo } from '../../../modules/font';
import FontInputComponent from './FontInputComponent';

const FontButtonComponent = () => {
  const font=useSelector((state)=>state.font.fontSize);
  const dispatch=useDispatch();

  return (
    <div>
      <button onClick={()=>{dispatch(changetwo())}}>2rem 폰트 변경하기</button>
      <button onClick={()=>{dispatch(changefive())}}>5rem 폰트 변경하기</button>
    </div>
  );
};

export default FontButtonComponent;