import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalContext';

// AnimalsProvider 하위 요소에게 context를 제공한다.
const AnimalsContainer = () => {
  return (
    <AnimalsProvider>
      <Animals />
    </AnimalsProvider>
  );
};

export default AnimalsContainer;