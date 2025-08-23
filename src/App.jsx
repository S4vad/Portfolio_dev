import Main from "./pages/Main";
import Work from "./pages/Work";
import Svg from "./pages/Svg";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <div className="bg-[#18181b] w-full min-h-screen  ">
      <div className="min-h-screen max-w-3xl p-5 md:p-0  mx-auto ">
        <Main />
        <motion.div
          className="w-full flex items-center my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="border-t border-gray-800 w-4"
            initial={{ width: 0 }}
            whileInView={{ width: "1rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.span
            className="mx-4 text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Work Highlights
          </motion.span>
          <motion.div
            className="flex-grow border-t border-gray-800"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <Work />
        <div className="w-full flex items-center my-9">
          <motion.div
            className="w-full flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="border-t border-gray-800 w-4"
              initial={{ width: 0 }}
              whileInView={{ width: "1rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.span
              className="mx-4 text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Skills
            </motion.span>
            <motion.div
              className="flex-grow border-t border-gray-800"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </div>

        <Svg />
      </div>
    </div>
  );
}

export default App;
