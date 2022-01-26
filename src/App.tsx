import "./App.css";
import { Header, LoginForm, WelcomeMessage } from "./components";

function App() {
  return (
    <div className="App">
      <div className="skewed"></div>
      <main>
        <Header />
        {/*  <LoginForm /> */}
        <WelcomeMessage />
      </main>
    </div>
  );
}

export default App;
