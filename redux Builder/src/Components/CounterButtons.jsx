import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { increment, decrement } from "../Store/action";

const CounterButtons = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment(1));
  };

  const handleReduce = () => {
    dispatch(decrement(1));
  };

  return (
    <div>
      <Button onClick={handleAdd}>ADD</Button> &nbsp;&nbsp;&nbsp;
      <Button onClick={handleReduce} disabled={count === 0}>
        REDUCE
      </Button>
    </div>
  );
};

export default CounterButtons;
