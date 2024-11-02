import { StrictMode, useEffect, useState } from "react";
import "./index.css";

function MainContent() {
  const quote = ["Hello World", "hallo dunia"];
  return quote.map((index, name) => (
    <ul>
      <li key={name}>{index}</li>
    </ul>
  ));
}

export default MainContent;
