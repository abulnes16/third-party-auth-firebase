import "./App.css";
import { Header, LoginForm, WelcomeMessage } from "./components";
import AppContext from "./state/AppContext";

function App() {
  return (
    <AppContext>
      <div className="App">
        <div className="skewed"></div>
        <main>
          <Header />
          {/*  <LoginForm /> */}
          <WelcomeMessage />
        </main>
      </div>
    </AppContext>
  );
}

export default App;
