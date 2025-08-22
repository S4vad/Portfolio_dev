import Main from "./pages/Main";
import Work from "./pages/Work";
import Svg from "./pages/Svg";

import "./App.css";

function App() {
  return (
    <div className="bg-[#18181b] w-full min-h-screen  ">
      <div className="min-h-screen max-w-3xl p-6 md:p-0 mx-auto ">
        <Main />
        <div class="w-full flex items-center my-6">
          <div class=" border-t border-gray-800 w-4"></div>
          <span class="mx-4 text-gray-300">Work Highlights</span>
          <div class="flex-grow border-t border-gray-800"></div>
        </div>

        <Work />
          <div class="w-full flex items-center my-6">
          <div class=" border-t border-gray-800 w-4"></div>
          <span class="mx-4 text-gray-300">Skills</span>
          <div class="flex-grow border-t border-gray-800"></div>
        </div>
        <Svg />
      </div>
    </div>
  );
}

export default App;
