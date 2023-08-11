import React from "react";
import { useSelector } from "react-redux";

export default function TestUserRedux() {
  const user = useSelector((state) => state.user);
  return (
    <div className="box">
      <h2>User Redux</h2>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
}
