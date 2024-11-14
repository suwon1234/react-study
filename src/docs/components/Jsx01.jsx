import React from "react"

const Jsx01 = () => {
  return (
    <React.Fragment>
      <p>나의 첫 컴포넌트! 1번😎</p>
    </React.Fragment>
  )
}

const Jsx02 = () => {
  return (
    <>
      <p>나의 첫 컴포넌트! 2번😎</p>
    </>
  )
}

const Jsx03 = () => {
  return (
    <>
      <p>나의 첫 컴포넌트! 3번😎</p>
    </>
  )
}

export { Jsx02, Jsx03 };
export default Jsx01;