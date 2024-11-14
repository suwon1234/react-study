import React from 'react';
import A from './A';
import CharContext from './CharContext';

const CharCharacter = () => {
  return (
    <CharContext.Provider value={{color : "blue", fontSize : "30px"}}>
      <A/>
    </CharContext.Provider>
  );
};

export default CharCharacter;