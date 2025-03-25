import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Nav from "./pages/Nav";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";

import "./App.css";

function App() {
  return (
    <div className="dark:bg-[#18181b] bg-[#F8F9FA] w-full min-h-screen items-stretch flex flex-col md:flex-row m-0">
      <div className="p-5 md:p-10 ">
        <Nav />
      </div>

      <div
        className="w-full h-[1px] md:h-full md:w-[1px] 
         bg-gradient-to-r md:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-950 
       from-neutral-200 to-neutral-400"
      ></div>

      <div className="min-h-screen w-full overflow-auto ">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/1" element={<Blog1 />} />
          <Route path="/blog/2" element={<Blog2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
