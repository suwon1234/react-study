import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/count';
//사용방법 훅함수 사용해야함
const Counter = () => {
  //스토어에 있는 값을 접근하기 위한 훅 함수 useSelector();
  const number=useSelector((state)=>state.number);
  //액션 발생시키기 위한 훅 함수 useDispatch();
  const dispatch=useDispatch();
  const [inputValue,setInputValue]=useState("");
  const OnChangeToInputValue=(e)=>{
    setInputValue(e.target.value)
    

  }
  return (
    <div>
      <h1>{number}</h1>
      <input type='text' onChange={OnChangeToInputValue} value={inputValue}></input>
      <div>
        <button onClick={()=>{dispatch(decrease())}}>감소</button>
        <button onClick={()=>{dispatch(increase())}}>증가</button>
      </div>
    </div>
  );
};

export default Counter;