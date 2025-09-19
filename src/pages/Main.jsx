import React from "react";
import { LinkPreviewDemo } from "./LinkPreview";
import { Toaster } from "sonner";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className="pt-6.5 md:pt-8">
      <Toaster />
      <div className="flex flex-col gap-3 w-full min-[1800px]:w-[65%]">
        <div className="flex justify-between ">
          <motion.div
            initial={{ opacity: 0.5, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div>
              <img
                className="rounded-full size-[65px]  md:size-[100px]  object-cover"
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
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.5, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-justify  text-[14px] leading-loose tracking-wide gap-5"
        >
          <p className="text-neutral-400">
            I'm a developer based in India. My interests lie around GenAI, web
            development, and solving actual problems using code. I wrote my
            first line of code in 2021. Currently, I'm pursuing my MCA while
            working as a freelance web developer. <span> </span>
            <a
              href={import.meta.env.VITE_RESUME_LINK}
              className="inline-block hover:scale-102 transition-all hover:text-yellow-200 text-[#FFFFFF]"
            >
              <span className="text-[15px]">See my Resume</span>
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
