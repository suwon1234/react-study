import React from 'react';
import Foods from './Foods';

const FoodContainer = () => {
  const foods = [
    {id : 1, name : "라면"},
    {id : 2, name : "피자"},
    {id : 3, name : "쌀국수"},
    {id : 4, name : "치킨"},
    {id : 5, name : "떡볶이"}]
  const style={
    
  }
  return (
    
      <Foods foods={foods} />
      
  );
};

export default FoodContainer;