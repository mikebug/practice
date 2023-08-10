import React from "react";
import { useState } from "react";
import "./App.css";

export default function Form() {
  const [user, setUser] = useState({ name: "", password: "" });
  return (
    <div className="box">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={() => console.log(user)}>Login</button>
    </div>
  );
}
