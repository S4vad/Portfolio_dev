import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Nav from "./pages/Nav"; // Added Nav import

import "./App.css";

function App() {
  return (
    <div className="bg-[#18181b] w-full h-[100vh] flex">
      {/* Left Side Navigation */}
      <div className="w-1/8">
        <Nav />
      </div>

      {/* Right Side Content */}
      <div className="w-3/4 p-8">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
