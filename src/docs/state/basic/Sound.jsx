import React, { useState } from 'react';

const Sound = () => {
  const [Sound,setSound] = useState("동물 울음소리");

  // const Dog=()=>{
  //   setSound("월월")
    

  // }
  // const Cat=()=>{
  //   setSound("냐옹")
    

  // }
  return (
    <div>
      <p>{Sound}</p>
      <button onClick={Dog=>{
         setSound("월월")

      }}>강아지 버튼</button>
      <button onClick={Cat=>{
        setSound("냐옹")
      }}>고양이 버튼</button>
      
    </div>
  );
};

export default Sound;