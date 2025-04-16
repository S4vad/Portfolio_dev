import React from "react";
import Svg from "./Svg";
import { LinkPreviewDemo } from "./LinkPreview";
import { Toaster } from "sonner";
import ContactForm from "./Contack";

export default function Main() {
  return (
    <div className="p-5 md:p-10 md:w-[50%] w-full transition-all duration-700 opacity-0 blur-md animate-fade-in">
      <Toaster />
      <div className="flex flex-col gap-2 w-full min-[1800px]:w-[65%]">
        <div className="flex justify-between ">
          <div className="flex items-center gap-3">
            <div>
              <img
                className="rounded-full w-[80px] h-[80px]  md:w-[90px] md:h-[90px] object-cover"
                src="/crop profile highmb.png"
                alt="Profile"
              />
            </div>

            <div className="flex flex-col justify-center gap-0.5">
              <div className="dark:text-white sm:text-[19px] text-[#212529] font-medium ml-0.5 md:ml-[3px] ">
                Muhammed Savad K
              </div>
              <div className="dark:text-gray-400 text-[13px] text-[#212529] font-medium ml-0.5 md:ml-[3px] mb-1">
                Kerala, India
              </div>
              <div >
              <a
                href="https://drive.google.com/file/d/1jLgQ-8uITiOJILSsu2ULCabp-BJowfLw/view?usp=drive_link"
                className="w-fit items-center hover:scale-105 px-2.5 py-0.5 flex border border-gray-500  
         hover:border-neutral-500 transition-all gap-2 rounded-3xl  
         dark:text-[#FFFFFF] text-[#212529]"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="11"
                  width="11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"></path>
                </svg>
                <span className="text-[11px]">View Resume</span>
              </a>

              </div>
             
            </div>
          </div>

          <div className="mt-0.5 sm:mt-1.5 ">
            <ContactForm />
          </div>
        </div>
        <div className="flex flex-col text-justify  text-[14px] leading-loose tracking-wide gap-5">
          <p className="dark:text-neutral-400 text-gray-500 ">
            I'm a developer based in India. My interests lie around GenAI, web
            development, and solving actual problems using code. I've built
            various projects to improve efficiency and productivity.
          </p>
          <p className="dark:text-neutral-400 text-gray-500">
            I wrote my first line of code in 2022. During my college years, I
            gained experience through internships, freelance projects, and by
            attending and organizing developer events. In 2022, I graduated with
            a degree in computer science from India. Currently, I'm pursuing my
            MCA while working as a freelance web developer.
          </p>

          <LinkPreviewDemo />
        </div>
        <Svg />
      </div>
    </div>
  );
}
