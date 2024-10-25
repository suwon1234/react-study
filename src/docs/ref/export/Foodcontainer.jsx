import React, { useRef, useState } from 'react';

// expert 실습
// 한국음식, 영어음식 이름을 추가하고 해당 음식을 선택해서 삭제하는 로직 만들기
const FoodContainer = () => {
  const [foods, setFoods] = useState([]);
  const inputRef = useRef([]);
  const checkRef=useRef([])
  
  const onClickToAddFood = () => {
      setFoods(
        foods.concat({
          kor : inputRef.current[0].value,
          eng : inputRef.current[1].value,
        })
      )
  }
  const onClickToDelete = () => {
    const newfood=foods.filter((_,i)=> !checkRef.current[i].checked)
    setFoods(newfood)
  };

  // 음식 목록을 표시하는 부분
  const foodList = foods.map(({ kor, eng }, i) => (
    <li key={i}>
      <input ref={(el) => (checkRef.current[i] = el)} type="checkbox" />
      {`${kor} (${eng})`}
    </li>
  ));

  return (
    <div>
      <div>
        <input ref={(el) => { inputRef.current[0] = el }} type="text" placeholder='한국 음식 이름'/>
        <input ref={(el) => { inputRef.current[1] = el }} type="text" placeholder='영어 음식 이름'/>
      </div>
      <div>
        <button onClick={onClickToAddFood}>추가</button>
        <button onClick={onClickToDelete}>삭제</button>
      </div>
      <div>
        {foodList}
      </div>
    </div>
  );
};

export default FoodContainer;