import React from 'react';
// JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다
// 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
// 조건식 && 참일 때 랜더링 할 JSX, 거짓이면 아무것도 출력하지 않는다.
// && 연산자는 앞의 조건식이 false이면 뒤를 실행하지 않으며, false라는 값은 랜더링 되지 않음
const Jsx04 = () => {
  const name = undefined || "박성진";
  const login = true;
  const guest = true;

  return (
    <div>
      {login && guest && <div> 비회원 로그인입니다.</div>}
      {login ? (<div>환영합니다</div>) : (<div>로그인 실패</div>)}
    </div>
  );
};

export default Jsx04;