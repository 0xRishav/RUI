import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import Usage from "./pages/usage/Usage";

function App() {
  const [isHomePage, setIsHomePage] = useState(true);
  return (
    <div className="App">
      <Navbar setIsHomePage={setIsHomePage} isHomePage={isHomePage} />
      <div className="app__wrapper">{isHomePage ? <Home /> : <Usage />}</div>
    </div>
  );
}

export default App;
