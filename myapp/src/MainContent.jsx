import { StrictMode, useState } from "react";
import "./index.css";

function MainContent() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>Tambahkan nilai saat ini {count}</h3>
      <button onClick={increment}>Tambahkan</button>
    </div>
  );
}
export default MainContent;
