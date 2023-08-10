import React from "react";

export default function PassingUp({ setter }) {
  setter("This is a prop");
  return <div></div>;
}
