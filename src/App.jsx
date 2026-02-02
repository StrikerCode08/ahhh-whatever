import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RosesForYou from "./pages/Roses";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roses" element={<RosesForYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
