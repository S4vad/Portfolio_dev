import React from "react";
import Svg from "./Svg";
import { LinkPreviewDemo } from "./LinkPreview";
import { Link } from "@mui/material";

export default function Main() {
  return (
    <div className="p-5 lg:p-10 lg:w-[50%] w-full transition-all duration-500 opacity-0 blur-md animate-fade-in">
      <div className="flex flex-col gap-2 w-full min-[1800px]:w-[65%]">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-[22px] font-medium">Muhammed Savad K</h1>
          <button className="items-center hover:scale-105 px-3 py-1 flex border border-gray-500 hover:border-neutral-500 transition-all gap-2 rounded-3xl">
            <div>
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"></path>
              </svg>
            </div>
            <span className="text-[#FFFFFF] text-[14px]">View Resume</span>
          </button>
        </div>
        <div className="flex flex-col text-justify  text-[14px] leading-loose tracking-wide gap-5">
          <p className="text-neutral-400 ">
            I'm a developer based in India. My interests lie around GenAI, web
            development, and solving actual problems using code. I've built
            various projects to improve efficiency and productivity.
          </p>
          <p className="text-neutral-400 ">
            I wrote my first line of code in 2022. During my college years, I
            gained experience through internships, freelance projects, and by
            attending and organizing developer events. In 2022, I graduated with
            a degree in computer science from India. Currently, I'm pursuing my
            MCA while working as a freelance web developer.
          </p>
         

          <LinkPreviewDemo/>
        </div>
        <Svg />
      </div>
    </div>
  );
}
