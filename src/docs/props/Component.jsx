import React from 'react';

const Component = (props) => {
  console.log(props)
  return (
    <div>
      <p>저의 이름은 : {props.name}</p>
      <p>저의 나이는 : {props.age}입니다.😁</p>
    </div>
  );
};

export default Component;