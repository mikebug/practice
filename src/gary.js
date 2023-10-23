import React from "react";

export default function gary() {
  return (
    <div>
      <sidebar />
      <div>
        <div>toggle</div>
        conditionally render the cards/grid/notes
        <div>
          <cards cards={"cards"}></cards>
          <grid></grid>
          <notes></notes>
        </div>
        <search></search>
      </div>
    </div>
  );
}
