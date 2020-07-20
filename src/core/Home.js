import React from "react";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  console.log("A", API);
  return (
    <div>
      <Base title="Welcome">
        <h1>Hello</h1>
        <p>Test</p>
        <p>Test</p>
      </Base>
    </div>
  );
}
