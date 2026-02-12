import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RosesForYou from "./pages/Roses";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roses" element={<RosesForYou />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
