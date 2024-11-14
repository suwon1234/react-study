import React from 'react';
import {Link} from 'react-router-dom'

const Intro = () => {
  return (
    <div>
      여기는 소개 페이지❤️
      <div>
        <Link to={"/job/devloper"}>개발자 소개 페이지</Link>
      </div>
      <div>
        <Link to={"/job/planner"}>기획자 소개 페이지</Link>
      </div>
    </div>
  );
};

export default Intro;