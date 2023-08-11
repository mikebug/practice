import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./userSlice";

export default function UserRedux() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h2>User Redux</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            dispatch(setUser({ name: e.target.value, age: user.age }))
          }
        />

        <label>Age: </label>
        <input
          type="number"
          value={user.age}
          onChange={(e) =>
            dispatch(setUser({ name: user.name, age: e.target.value }))
          }
        />

        <div>
          <label>Name: </label>
          <span>{user.name}</span>
          <label>Age: </label>
          <span>{user.age}</span>
        </div>
      </div>
    </div>
  );
}
