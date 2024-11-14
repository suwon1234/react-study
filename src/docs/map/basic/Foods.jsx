import React from 'react';
import Food from './Food';

const Foods = ({foods, style}) => {

  return (
    <div>
      {foods.map((food, i) => <Food key={i} food={food} style={style} />)}
    </div>
  );
};

export default Foods;