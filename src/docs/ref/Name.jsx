import React, { useRef, useState } from 'react';
// 사용자가 입력한 정보를 이름을 p태그에 실시간으로 작성하고
// 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
// 입력후 엔터를 누르면 p태그에 반영

const Name = () => {
  const [result,setResult]=useState("");
  const inputRef= useRef();// 레퍼런스를 사용하여 변수 값을 변경한다 이러면 굳이 새로운 stat를 안만들어도 된다

const OnChangeInput=(e)=>{
  setResult(e.target.value);
}
const OnclickToSorry=()=>{
  setResult(inputRef.current.value.replaceAll("님","") +"님")
}

  return (
    <div>

      <p>{result}</p>
      <input ref={inputRef} value={result} type="text" onChange={OnChangeInput} onKeyDown={(e)=>console.log(e)}></input>
      <button onClick={OnclickToSorry}>버튼</button>
      
    </div>
  );
};

export default Name;