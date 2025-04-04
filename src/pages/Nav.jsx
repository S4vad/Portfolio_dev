import { Link } from "react-router-dom";
import { useState } from "react";
import { ModeToggle } from "@/darkmode/ModeToggle";

export default function Nav() {
  const [selected, setSelected] = useState("about");
  return (
    <nav className="  w-[10%] flex items-center md:flex-col gap-4">
      <Link
        onClick={() => {
          setSelected("about");
        }}
        to="/"
        className={`dark:hover:text-gray-200 dark:text-gray-400 text-gray-950 hover:text-gray-600  ${
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
        className={`dark:hover:text-gray-200 dark:text-gray-400 text-gray-950 hover:text-gray-600  ${
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
        className={`dark:hover:text-gray-200 dark:text-gray-400 text-gray-950 hover:text-gray-600  ${
          selected === "blog" && "dark:!text-white !text-gray-500"
        }`}
      >
        blog
      </Link>
      <div className="md:relative md:right-auto absolute right-6">
        <ModeToggle />
      </div>
    </nav>
  );
}
