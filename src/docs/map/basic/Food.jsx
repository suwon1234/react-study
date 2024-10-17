import React from 'react';

const Food = (food,style) => {
  return (
    <li style={style}>
      {food.name}
    </li>
  );
};

export default Food;