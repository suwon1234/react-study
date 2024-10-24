import React, { useState } from 'react';

const Checkbox = () => {

  const [message,setMessage]=useState([]);
  const OnClickToCheck=(e)=>{
    if(e.target.checked){
      setMessage(message.concat(e.target.value)); //  주소값이 변하지 않아서 push되지 않는다 그래서 새로운 주소값을 할당하기 위해서 push 대신 concat를 사용해야한다 스프레드문법은 객체에게 좋다
    }else{
      setMessage(message.filter((m)=>m !==e.target.value))
    }
  }
  return (
    <div>
      <div>
        <span>front-end</span>
        <input type="checkbox" value="front-end" onClick={OnClickToCheck}/>
        </div>
      <div>
        <span>back-end</span>
        <input type="checkbox" value="back-end" onClick={OnClickToCheck}/>
        </div>
      <div>
        <span>AI-end</span>
        <input type="checkbox" value="AI-end" onClick={OnClickToCheck}/>
        </div>
        <div>
          <h1>{message.map((m,i)=><p key={i}>{m}</p>)}</h1>
        </div>
    </div>
  );
};

export default Checkbox;