import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <span className="dark:text-neutral-400 text-[#212529]">
      you can find me on&nbsp;
      <LinkPreview
        url="https://www.linkedin.com/in/savadk"
        className="cursor-pointer dark:text-[#82b817] text-[#82b817] hover:text-[#a3d42a] border-[#E0E0E0] dark:hover:text-[#a3d42a] border-b inline-flex items-center gap-1 dark:border-neutral-800 border-dashed"
      >
        <a
          href="https://www.linkedin.com/in/savadk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </LinkPreview>
      ,&nbsp;
      <LinkPreview
        url="https://github.com/S4vad"
         className="cursor-pointer dark:text-[#82b817] text-[#82b817] hover:text-[#a3d42a] border-[#E0E0E0] dark:hover:text-[#a3d42a] border-b inline-flex items-center gap-1 dark:border-neutral-800 border-dashed">
        <a
          href="https://github.com/S4vad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </LinkPreview>
      ,&nbsp;
      <LinkPreview
        url="https://instagram.com/sava__d/"
         className="cursor-pointer dark:text-[#82b817] text-[#82b817] hover:text-[#a3d42a] border-[#E0E0E0] dark:hover:text-[#a3d42a] border-b inline-flex items-center gap-1 dark:border-neutral-800 border-dashed"
      >
        <a
          href="https://instagram.com/sava__d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </LinkPreview>
    </span>
  );
}
