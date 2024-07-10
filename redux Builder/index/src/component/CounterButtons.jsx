import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleReduce } from '../redux/action';



function CounterButtons() {

  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.count)
  return (
    <div>
      <button
        onClick={() => dispatch(handleAdd(1))}
        style={{ padding: "10px 10px" }}
      >
        ADD
      </button>
      <button
        disabled={count === 0}
        onClick={() => dispatch(handleReduce(1))}
        style={{ padding: "10px 10px",marginLeft:"15px" }}
      >
        REDUCE
      </button>
    </div>
  );
}

export default CounterButtons
