import React from 'react';
const Form = ({style, inputRef, formRef, onClickToCheckInputValues}) => {

  // CheckInput에서 Props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
  return (
    <form ref={formRef} style={style}>
      <div>
        <span>이메일</span>
        <input ref={(el) => inputRef.current[0] = el} type="text" name="email" />
      </div>
      <div>
        <span>비밀번호</span>
        <input ref={(el) => inputRef.current[1] = el} type="password" name="password" autoComplete='false'/>
      </div>
      <div >
        <span>이름</span>
        <input ref={(el) => inputRef.current[2] = el} type="text" name="name" />
      </div>
      <span>나이</span>
      <div>
        <input ref={(el) => inputRef.current[3] = el} type="text" name="age" />
        <button type='button' onClick={onClickToCheckInputValues}>입력 완료</button>
      </div>
    </form>
  );
};

export default Form;