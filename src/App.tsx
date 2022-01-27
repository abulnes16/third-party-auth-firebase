import "./App.css";
import { HomePage } from "./pages";
import AppContext from "./state/AppContext";

function App() {
  return (
    <AppContext>
      <div className="App">
        <div className="skewed"></div>
        <HomePage />
      </div>
    </AppContext>
  );
}

export default App;
