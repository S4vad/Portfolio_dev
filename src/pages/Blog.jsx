import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div class="p-5 md:p-10 md:w-[50%] w-full transition-all duration-700 opacity-0 blur-md animate-fade-in">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-4">
          <div class="flex hover:opacity-100 text-md flex-col md:flex-row md:items-center justify-between gap-2">
            <Link
              class="text-[#82b817] hover:text-[#a3d42a]  border-b inline-flex items-center gap-1 border-neutral-800 border-dashed  transition-all undefined"
              to="/blog/1"
            >
              The Journey of Building Bizfluence
            </Link>
            <p class="text-neutral-500">25 Feb, 2025</p>
          </div>

          <div class="flex hover:opacity-100 text-md flex-col md:flex-row md:items-center justify-between gap-2">
            <Link
              class="text-[#82b817] hover:text-[#a3d42a]  border-b inline-flex items-center gap-1 border-neutral-800 border-dashed  transition-all undefined"
              to="/blog/2"
            >
              The Habit of Reading: A Journey of Growth and Discovery
            </Link>
            <p class="text-neutral-500">8 FEB, 2024</p>
          </div>

        </div>
      </div>
    </div>
  );
}
