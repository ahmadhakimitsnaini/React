import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
function Header() {
  return (
    <div className="HeaderContainer">
      <div className="logo">
        <div className="React">
          <img src={reactLogo} alt="react logo" />
        </div>
        <div className="vite">
          <img src={viteLogo} alt="Vite logo" />
        </div>
      </div>
      <div className="right">
        <h1>First React Project</h1>
      </div>
    </div>
  );
}
export default Header;
