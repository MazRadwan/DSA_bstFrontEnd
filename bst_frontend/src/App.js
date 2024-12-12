import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home/Home";
import EnterNumbers from "./routes/EnterNumbers/EnterNumbers";
import PreviousTrees from "./routes/PreviousTrees/PreviousTrees";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/enter-numbers">Enter Numbers</Link>
          <Link to="/previous-trees">Previous Trees</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enter-numbers" element={<EnterNumbers />} />
          <Route path="/previous-trees" element={<PreviousTrees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
