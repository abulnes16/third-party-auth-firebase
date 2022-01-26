import { FIREBASE_LOGO } from "../../assets/img";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <div>
        <h1>Solution Challenge</h1>
        <h2>Firebase Week</h2>
      </div>
      <img className="firebase-logo" src={FIREBASE_LOGO} alt="firebase" />
    </header>
  );
}

export default Header;
