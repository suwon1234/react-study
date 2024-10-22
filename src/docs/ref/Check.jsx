import React, { useRef } from 'react';

const Check = () => {
  
  const OnClickToCheck=()=>{
    for(let input of inputRef.current){
      if(!input.value){
        alert(`${input.name}를 입력하세요`)
        return;
      }
    }
    formRef.current.submit();
    


  }
  const inputRef=useRef([]);
  const formRef=useRef();
  return (
    <div>
      <form ref={formRef}>
        <div>
          <span>아이디</span>
          <input type="text" name="id" ref={(element)=>{inputRef.current[0]=element}}></input>
        
       </div>
       <div><span>비밀번호</span>
       <input type="text" name="password" ref={(element)=>{inputRef.current[1]=element}}></input></div>
       <button type='button' onClick={OnClickToCheck}>전송</button>
      </form>
    </div>
  );
};

export default Check;