import { Link } from "react-router-dom";
import { useState } from "react";
import { ModeToggle } from "@/darkmode/ModeToggle";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Nav() {
  const [selected, setSelected] = useState("about");
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const initial = isSmallScreen
    ? { y: -100, opacity: 0 }
    : { x: -100, opacity: 0 };

  return (
    <div className="flex md:flex-col gap-4">
      <motion.nav
        initial={initial}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[10%] flex md:flex-col gap-4"
      >
        <Link
          onClick={() => {
            setSelected("about");
          }}
          to="/"
          className={`relative dark:hover:text-gray-200 dark:text-gray-400 text-gray-950 hover:text-gray-600 duration-300 ease-in-out ${
            selected === "about" && "dark:!text-white !text-gray-500"
          }`}
        >
          <span className="relative inline-block">
            about
            <span className={`absolute left-1/2 bottom-0 h-[1px] bg-gray-500 
              transform -translate-x-1/2
              transition-all duration-300 ease-out
              ${selected === "about" ? "w-full" : "w-0"}
              `}
            ></span>
          </span>
        </Link>
        <Link
          onClick={() => {
            setSelected("work");
          }}
          to="/work"
          className={`relative dark:hover:text-gray-200 dark:text-gray-400 text-gray-950 hover:text-gray-600 duration-300 ease-in-out ${
            selected === "work" && "dark:!text-white !text-gray-500"
          }`}
        >
          <span className="relative inline-block">
            work
            <span className={`absolute left-1/2 bottom-0 h-[1px] bg-gray-500 
              transform -translate-x-1/2
              transition-all duration-300 ease-out
              ${selected === "work" ? "w-full" : "w-0"}
              `}
            ></span>
          </span>
        </Link>
        <Link
          onClick={() => {
            setSelected("blog");
          }}
          to="/blog"
          className={`relative dark:hover:text-gray-200 dark:text-gray-400 text-gray-950 hover:text-gray-600 duration-300 ease-in-out ${
            selected === "blog" && "dark:!text-white !text-gray-500"
          }`}
        >
          <span className="relative inline-block">
            blog
            <span className={`absolute left-1/2 bottom-0 h-[1px] bg-gray-500 
              transform -translate-x-1/2
              transition-all duration-300 ease-out
              ${selected === "blog" ? "w-full" : "w-0"}
              `}
            ></span>
          </span>
        </Link>
      </motion.nav>
      <div className="md:relative md:right-auto absolute right-6 mt-2 md:mt-0">
        <ModeToggle />
      </div>
    </div>
  );
}