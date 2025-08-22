import React from "react";
import { LinkPreviewDemo } from "./LinkPreview";
import { Toaster } from "sonner";
import { MapPin } from "lucide-react";

export default function Main() {
  return (
    <div className="pt-8 md:pt-11 mb-2 transition-all duration-700 opacity-0 animate-fade-in">
      <Toaster />
      <div className="flex flex-col gap-3 w-full min-[1800px]:w-[65%]">
        <div className="flex justify-between ">
          <div className="flex items-center gap-4">
            <div>
              <img
                className="rounded-full size-[90px]  md:size-[100px]  object-cover"
                src="/profile.png"
                alt="Profile"
              />
            </div>

            <div className="flex flex-col justify-center gap-1.5">
              <h1 className="text-white text-[22px] md:text-[24px] font-medium leading-tight">
                Hey, I'm Savad
              </h1>

              <div className="flex items-center gap-1 text-gray-400 text-[14px]">
                <MapPin size={14} className="text-gray-500" />
                <span>Kerala, India</span>
              </div>

              <LinkPreviewDemo />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-justify  text-[14px] leading-loose tracking-wide gap-5">
          <p className="text-neutral-400">
            I'm a developer based in India. My interests lie around GenAI, web
            development, and solving actual problems using code. I wrote my
            first line of code in 2021. Currently, I'm pursuing my MCA while
            working as a freelance web developer. <span> </span>
            <a
              href="https://drive.google.com/file/d/1jLgQ-8uITiOJILSsu2ULCabp-BJowfLw/view?usp=drive_link"
              className=" hover:scale-105 transform  
           hover:text-yellow-200
         text-[#FFFFFF] "
            >
              <span className="text-[15px]">See my Resume</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
