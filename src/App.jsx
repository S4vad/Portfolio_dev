import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Nav from "./pages/Nav"; 
import Blog from "./pages/Blog"

import "./App.css";

function App() {
  return (
    <div className="bg-[#18181b] w-full min-h-screen items-stretch flex flex-col md:flex-row m-0">
      <div className="p-5 md:p-10 ">
        <Nav />
      </div>

      <div className="w-full h-[1px] md:h-full md:w-[1px] bg-gradient-to-r md:bg-gradient-to-b from-neutral-800 to-neutral-950"></div>



      <div className="min-h-screen w-full overflow-auto ">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
