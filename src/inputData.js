import React from "react";
import { useState } from "react";

export default function InputData() {
  const [name, setName] = useState("");
  return (
    <div className="box">
      <form>
        <label>
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
      <button onClick={() => console.log(name)}>Login</button>
    </div>
  );
}
