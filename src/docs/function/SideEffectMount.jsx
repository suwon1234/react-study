import React, { useEffect, useState } from 'react';
// https://jsonplaceholder.typicode.com/users
const SideEffectMount = () => {
  const [name,setName]=useState([]);

  

  useEffect(()=>{
    const getUsers=async ()=>{
      const response=await fetch("https://jsonplaceholder.typicode.com/users");
      const datas= await response.json();
      return datas;
    }
    
    getUsers().then(setName)
  },[])

  
  return (
    <ul>
      {name.map((name,i)=><li key={i}>{name.name}</li>)}

    </ul>
  );
};

export default SideEffectMount;