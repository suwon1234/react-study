import React, { useRef } from 'react';
import Form from './Form';

const CheckInput = () => {
  const style = {
    display : "flex",
    flexDirection : "column",
    width : "200px"
  }
  const InputRef=useRef([]);
  const formRef=useRef(null);
  // inputRef를 전달
  // formRef를 전달
  // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 제작 후 전달

  const onClickCheckInputValues=()=>{
    for(let input of InputRef.current){
      if(!input.value){
        alert(`${input.name} 값을 입력해주세요`)
      }
    }
    formRef.current.submit();
  }
  return (
      <Form style={style} InputRef={InputRef} formRef={formRef} onClickCheckInputValues={onClickCheckInputValues}/>
    
  );
};

export default CheckInput;