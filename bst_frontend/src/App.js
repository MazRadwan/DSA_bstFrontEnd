// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./routes/Home/Home";
import EnterNumbers from "./routes/EnterNumbers/EnterNumbers";
import PreviousTrees from "./routes/PreviousTrees/PreviousTrees";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enter-numbers" element={<EnterNumbers />} />
            <Route path="/previous-trees" element={<PreviousTrees />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
