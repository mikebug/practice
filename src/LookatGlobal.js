import React from "react";
import { useSelector } from "react-redux";

export default function LookatGlobal() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="box">
      <p>Look at the global state</p>
      <p>Count: {count}</p>
    </div>
  );
}
