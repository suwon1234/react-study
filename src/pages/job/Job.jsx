import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {route} from '../../modules/route'
import { useSelector } from 'react-redux';



//직업의 기술을 보여주는 페이지
const Job = () => {
  const route = useSelector((state)=> state.route.jobs) ///⭐
  const {title}=useParams();                            ///⭐

  const {name,skills}=route[title]
  
  
  // url 파라미터, 쿼리스트링 2가지 방법
  // const [serchParams]=useSearchParams();
  // const title=serchParams.get("title");

 // redux에 있는 값을 가져와서 각각에 요청된 페이지에 맞는 기술들을 화면에 출력

const skill=skills.map((skill)=>(
  <li>{skill}</li>
))
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>기술</th>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <tr>
            <th>{name}</th>
            <th>{skill}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Job;