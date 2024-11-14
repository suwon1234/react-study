import React from 'react';

const Animal = ({state,actions}) => {
  const {animals}=state;
  const {remove,insert}=actions;
  const animalList=animals.map((animal,i)=>{
    <li key={i}>
      <button onClick={()=>{remove(i)}}>{animal}</button>
    </li>
  })
  return (
    <div>
      {animalList}
    </div>
  );
};

export default Animal;