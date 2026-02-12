import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RosesForYou from "./pages/Roses";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roses" element={<RosesForYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
