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
        className="w-[10%] flex   md:flex-col gap-4"
      >
        <Link
          onClick={() => {
            setSelected("about");
          }}
          to="/"
          className={`dark:hover:text-gray-200 dark:text-gray-400 text-gray-950 hover:text-gray-600 hover:transition-all hover:scale-105 duration-300 ease-in-out  ${
            selected === "about" && "dark:!text-white !text-gray-500"
          }`}
        >
          about
        </Link>
        <Link
          onClick={() => {
            setSelected("work");
          }}
          to="/work"
          className={`dark:hover:text-gray-200 dark:text-gray-400 hover:transition-all hover:scale-105 duration-300 ease-in-out text-gray-950 hover:text-gray-600  ${
            selected === "work" && "dark:!text-white !text-gray-500"
          }`}
        >
          work
        </Link>
        <Link
          onClick={() => {
            setSelected("blog");
          }}
          to="/blog"
        className={`dark:hover:text-gray-200 dark:text-gray-400 hover:transition-all hover:scale-105 duration-300 ease-in-out text-gray-950 hover:text-gray-600  ${
            selected === "blog" && "dark:!text-white !text-gray-500"
          }`}
        >
          blog
        </Link>
      </motion.nav>
      <div className="md:relative md:right-auto absolute right-6 mt-2 md:mt-0 ">
        <ModeToggle />
      </div>
    </div>
  );
}
