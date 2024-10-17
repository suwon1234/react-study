// Jsx 언어의 스타일은 밑에 나오는것과 같이 나타낼 수 있다.


export default function Jsx01() {
  const name= "박성진";
  const message = "환영합니다"
  
  return(
    <div>
      {name}님 {message}
      <p style={{color : "red"}}>{message}</p>
    </div>

  )
}