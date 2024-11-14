import React from 'react';

const Component2 = (props) => {
  console.log(props)
  props.printName("김세환");
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Component2;