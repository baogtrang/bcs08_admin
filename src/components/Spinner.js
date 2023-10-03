import React from "react";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PacmanLoader color="#36d7b7" speedMultiplier={3} />
    </div>
  );
}
// react spinner npm
