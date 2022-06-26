import React, { useState } from "react";
import ScoreCard from "./components/ScoreCard";
export default function App() {


const [name, setName] = useState("");
const [bid, setBid] = useState("");
const [point, setPoint] = useState("");
const [list, setList] = useState([]);
const [isSubmit, setIsSubmit] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setList([...list, {name,bid,point}])

    console.log(name,bid,point);
  };

  const resetHandler = () =>{
    setList([]);
    setName("");
    setBid("");
    setPoint("");
  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <label> Name </label> <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label> Bid </label> <input type="text" value={bid} onChange={(e)=>setBid(e.target.value)} />
        <label> Points </label> <input type="text" value={point} onChange={(e)=>setPoint(e.target.value)} />
        <input type="submit"/>
      </form>
        <button onClick={resetHandler}>Reset</button>
      {isSubmit && list && Array.isArray(list) && list.length > 0 ? <ScoreCard props={list}/> : null }
     </>
  );
}
