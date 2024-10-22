import React from 'react';
import User from './User';

const Users = ({userList}) => {
  // Users의 Props를 받아서 아래 내용들을 실습
  const userMap=userList.map((user,i)=><User key={i} user={user} />)
  return (
    <div>
  
    </div>
  );
};

export default Users;