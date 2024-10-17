import React, { useLayoutEffect, useState } from 'react';
  // 15분
  // 빨간색 버튼을 누르면 글자색을 빨갛게
  // 파란색 버튼을 누르면 글자색을 파랗게
  // 핑크색을 입력하면 글자 색을 없앤다.
const Colors = () => {
  const [result,setresult] = useState();
  const [color,setcolor]=useState();
  const onChangeInputValue=(e)=>{
       if(e.target.value=="핑크색"){
      setcolor("");
    }
    return setresult(e.target.value)
  }
  const red=()=>{
   setcolor("red")
    
  }
  const blue=()=>{
   setcolor("blue")

  }

  
  return (
    <div>
      <p style={{color}}>{result}</p>
      <input type="text" onChange={onChangeInputValue}></input>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
      
    </div>
  );
};

export default Colors;