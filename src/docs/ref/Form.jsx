import React from 'react';
const Form = ({style,InputRef,formRef,onClickCheckInputValues}) => {
  // CheckInput에서 Props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
  return (
    <form ref={formRef} style={style}>
      <input ref={(el)=>InputRef.current[0]=el} type='text'  name='email'></input>
      <input ref={(el)=>InputRef.current[1]=el}  type='text'  name='password'></input>
      <input ref={(el)=>InputRef.current[2]=el}  type='text'  name='name'></input>
      <input ref={(el)=>InputRef.current[3]=el}  type='text'  name='age'></input>
      <button type='button' onClick={onClickCheckInputValues}>입력완료</button>
    </form>
  );
};

export default Form;