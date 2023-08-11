import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomNumber } from "./counterSlice";

export default function RandomNumber() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchRandomNumber());
  }
  return (
    <div>
      <button onClick={handleClick}>Get Random Number</button>
      <span>{count}</span>
    </div>
  );
}
