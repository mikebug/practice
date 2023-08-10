import React, { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="box">
      <label htmlFor="checkbox">Checkbox</label>
      <input
        type="checkbox"
        onClick={() => {
          setChecked(!checked);
        }}
      />
      <p>{checked ? "Checked" : "Not checked"}</p>
    </div>
  );
}
