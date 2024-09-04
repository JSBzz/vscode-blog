import { ReactComponent as VscodeIcon } from "./icons/vscode-b.svg";
import "./css/main.css";

function Main() {
  return (
    <div className="main-body">
      <VscodeIcon className="main-vscode-icon" />
      <div className="command">
        <span className="command-text">Show Hello</span>
        <button className="command-btn">Ctrl</button>+<button className="command-btn">H</button>
      </div>
    </div>
  );
}

export default Main;
