import React, { useState } from 'react';

const Name = () => {
  // 사용자가 입력한 값을 화면에 출력
  const [result,setresult]=useState("결과");
  const onChangeInputValue = (e)=>{
    setresult(e.target.value);
  }
  return (
    <div>
      <p>{result}</p>
      <input type="text" onChange={onChangeInputValue}></input>
      
    </div>
  );
};

export default Name;