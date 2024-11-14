import React, { useContext, useState } from 'react';
import { AniamlsContext } from './AnimalContext';
import Animal from './Animal';

// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터 : 동물 버튼 추가 (context 메서드 insert 사용)
// 동물 버튼을 클릭하면 해당 버튼을 삭제 (context 메서드를 remove 사용)
const Animals = () => {

  const {state, actions} = useContext(AniamlsContext)
  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const onKeyDownAddAnimal = (e) => {
    if(e.key === 'Enter'){
      actions.insert(inputValue)
    }
  }

  const animalList = state.animals.map((animal, i) => (
    <li key={i}><button onClick={() => { actions.remove(i) }}>{animal}</button></li>
  ))

  return (
    <ul>
      <input type="text" onChange={onChangeInputValue} onKeyDown={onKeyDownAddAnimal}/>
      <Animal state={state} actions={actions}/>
    </ul>
  );
};

export default Animals;