import { StrictMode, useEffect, useState } from "react";
import "./index.css";

function MainContent() {
  const [second, setSecond] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return <p>Detik saat ini {second} second</p>;
}
export default MainContent;
