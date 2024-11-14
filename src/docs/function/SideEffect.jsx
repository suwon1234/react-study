import React, { useEffect, useState } from 'react';

const SideEffect = () => {
  const [number,setNumber]=useState(0);
  const [color,setColor]=useState("");
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
  }

  // useEffect(()=>{
  //   console.log("리렌더링");
  // },[])
  const OnChangeColor=()=>{
    setColor(getRandomColor())
  }
  const onClickIncrease=()=>{
    setNumber((prev)=>{
      console.log(prev,"이전 값")
      return number+1
    });
  }
  useEffect(()=>{
    console.log("리렌더링");
  },[number])
  console.log(color)
  return (
    <div>
      <h1 color={{color}}>{number}</h1>
    <button onClick={onClickIncrease}>증가</button>
    <button onClick={OnChangeColor}>색상변경</button>
      
    </div>
  );
};

export default SideEffect;