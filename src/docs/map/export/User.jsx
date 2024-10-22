import React from 'react';

const User = ({user}) => {
    // UserContainer에서 유저의 정보를 박아서 User 컴포넌트로 반복문을 돌린다
  //1) 유저의 데이터 중 경기도에 거주하는 사람의 데이터만 태그로 출력 
  //2) 유저의 데이터 중 나이가 20보다 큰 사람의 정보를 화면에 태그로 출력
  //3) 강남구의 사는 사람의 이름을 태그로 출력     
  //4) 모든 핸드폰 번호를 010-1234-5678로 변경하기 replaceALL
  //5) 장보고의 주소를 서울시 중랑구로 변경 replace
  

  const {id,age,name,phone,address}=user;
  console.log(address.includes("경기도"))
  return (
    <div>
      <li>
      </li>
      
    </div>
  );
};

export default User;