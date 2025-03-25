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
        className={`hover:text-gray-200 text-gray-400 dark:text-gray-950 dark:hover:text-gray-600  ${
          selected === "about" && "text-white dark:!text-gray-400"
        }`}
      >
        about
      </Link>
      <Link
        onClick={() => {
          setSelected("work");
        }}
        to="/work"
        className={`hover:text-gray-200 text-gray-400 dark:text-gray-950 dark:hover:text-gray-600  ${
          selected === "work" && "text-white dark:!text-gray-400"
        }`}
      >
        work
      </Link>
      <Link
        onClick={() => {
          setSelected("blog");
        }}
        to="/blog"
        className={`hover:text-gray-200 text-gray-400 dark:text-gray-950 dark:hover:text-gray-600  ${
          selected === "blog" && "text-white dark:!text-gray-400"
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
