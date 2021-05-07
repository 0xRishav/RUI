import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app__wrapper">
        <Home />
      </div>
    </div>
  );
}

export default App;
