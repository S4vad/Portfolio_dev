import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [selected, setSelected] = useState("about");
  return (
    <nav className=" h-screen flex flex-col items-start justify-start p-10 space-y-4 text-white">
      <Link
        onClick={() => {
          setSelected("about");
        }}
        to="/"
        className={`hover:text-gray-200 text-gray-400 ${
          selected === "about" && "text-white"
        }`}
      >
        About
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
        Work
      </Link>
    </nav>
  );
}
