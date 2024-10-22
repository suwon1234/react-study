import React from 'react';

const Form = () => {
  // CheckInput에서 Props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
  return (
    <form>
      <input type='text'  name='email'></input>
      <input type='text'  name='password'></input>
      <input type='text'  name='name'></input>
      <input type='text'  name='age'></input>
      <button>입력완료</button>
    </form>
  );
};

export default Form;