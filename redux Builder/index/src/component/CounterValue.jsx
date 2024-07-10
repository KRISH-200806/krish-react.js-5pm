import React from 'react'
import { useSelector } from 'react-redux'


function CounterValue() {
  const count = useSelector((state)=>state.counter.count)
   
  return (
    <div>
      <h1> counter value :</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default CounterValue