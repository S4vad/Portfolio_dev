import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [selected, setSelected] = useState("about");
  return (
    <nav className="  w-[10%] flex md:flex-col gap-4">
      <Link
        onClick={() => {
          setSelected("about");
        }}
        to="/"
        className={`hover:text-gray-200 text-gray-400 ${
          selected === "about" && "text-white"
        }`}
      >
        about
      </Link>
      <Link
        onClick={() => {
          setSelected("work");
        }}
        to="/work"
        className={`hover:text-gray-200 text-gray-400 ${
          selected === "work" && "text-white"
        }`}
      >
        work
      </Link>
      <Link
        onClick={() => {
          setSelected("blog");
        }}
        to="/blog"
        className={`hover:text-gray-200 text-gray-400 ${
          selected === "blog" && "text-white"
        }`}
      >
        blog
      </Link>
    </nav>
  );
}
