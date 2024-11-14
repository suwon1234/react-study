import React, { useState } from 'react';

const Sound = () => {
  // 5분
  // 강아지 버튼과 고양이 버튼을 만들고
  // 버튼을 눌렀을 때 각각 울음 소리가 나오도록 구현하기
  // 강아지는 멍멍, 고양이는 야옹
  const [sound, setSound] = useState("후후");
  const catSound = () => { setSound("멍멍") }
  const dogSound = () => { setSound("멍멍") }

  return (
    <div>
      <p>{sound}</p>
      <button onClick={dogSound}>강아지 버튼</button>
      <button onClick={catSound}>고양이 버튼</button>
    </div>
  );
};

export default Sound;