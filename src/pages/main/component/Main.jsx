import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
    <div>여기는 메인 페이지</div>
    <Link to={"/intro"}>여기는 소개 페이지</Link>
    </>
  );
};

export default Main;