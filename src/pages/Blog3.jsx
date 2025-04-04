import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Blog3() {
  return (
    <div className="p-5 md:p-10 md:w-[50%] space-y-8 w-full transition-all duration-700 opacity-0 blur-md animate-fade-in">
      <div className="flex-col">
        <h2 className="text-xl font-semibold dark:text-white mb-3 text-[#212529]">
          Is This the End of Software Tutorial Videos? Google AI Studio’s
          Real-Time Magic 💡
        </h2>
        <p className="text-[14px] text-neutral-600 mb-3">
          Posted on 4 APR, 2025
        </p>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          Hey friends! 👋 Today I want to talk about something that genuinely
          blew my mind: <strong>Google AI Studio</strong>, especially its{" "}
          <strong>real-time stream mode</strong>. I’ve also been playing with{" "}
          <strong>NotebookLM</strong>, another amazing tool—but let’s start with
          the real star.
        </p>
      </div>
      <div className="flex-col">
        <h2 className="text-lg font-semibold dark:text-white mb-3 text-[#212529]">
          🌟 Real-Time Stream in Google AI Studio: Like a Live AI Mentor
        </h2>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          If you haven’t tried it yet, Google AI Studio is a browser-based
          playground for using Google's language models like Gemini. It's
          simple, fast, and super beginner-friendly. But the feature that really
          stands out is the <strong>real-time stream mode</strong>.
        </p>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          Instead of waiting for a full response, the AI types out the answer
          word-by-word—just like how you’d see someone type in a live coding or
          tutorial video. And that’s exactly why I <strong>love it</strong>.
        </p>
        <LinkPreview
          url="https://aistudio.google.com"
          className="cursor-pointer dark:text-[#82b817] text-[#82b817] hover:text-[#a3d42a] border-[#E0E0E0] dark:hover:text-[#a3d42a] border-b inline-flex items-center gap-1 dark:border-neutral-800 border-dashed text-[14px]"
        >
          <a
            href="https://aistudio.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AI Studio
          </a>
        </LinkPreview>
      </div>
      <div className="flex-col">
        <h2 className="text-lg font-semibold dark:text-white mb-3 text-[#212529]">
          🤯 Death of Traditional Tutorial Videos?
        </h2>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          Honestly, it made me wonder:{" "}
          <strong>are long tutorial videos becoming outdated?</strong> Why sit
          through a 30-minute YouTube video when you can:
        </p>
        <ul className="list-disc list-inside text-gray-500 text-[14px]">
          <li>Ask exactly what you want</li>
          <li>Get an answer tailored to your code or idea</li>
          <li>
            See the explanation unfold live, just like a tutorial video—but
            better
          </li>
        </ul>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          It’s like replacing generic instructions with your own personal
          instructor, always available, always focused on your needs.
        </p>
      </div>

      <div className="flex-col">
        <h2 className="text-lg font-semibold dark:text-white mb-3 text-[#212529]">
          ✨ Bonus: NotebookLM – Your Research Buddy
        </h2>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          While AI Studio helps with real-time learning,{" "}
          <strong>NotebookLM</strong> is like an AI assistant for your
          documents. You upload your files (like notes, articles, or PDFs), and
          it helps summarize, answer questions, and explore ideas based on your
          own content. Super useful for students, bloggers, and creators like
          us.
        </p>
        <LinkPreview
          url="https://notebooklm.google.com"
          className="cursor-pointer dark:text-[#82b817] text-[#82b817] hover:text-[#a3d42a] border-[#E0E0E0] dark:hover:text-[#a3d42a] border-b inline-flex items-center gap-1 dark:border-neutral-800 border-dashed text-[14px] "
        >
          <a
            href="https://notebooklm.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NotebookLM
          </a>
        </LinkPreview>
      </div>
      <div className="flex-col">
        <h2 className="text-lg font-semibold dark:text-white mb-3 text-[#212529]">
          💬 Final Thoughts
        </h2>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          These tools, especially <strong>real-time stream mode</strong> in AI
          Studio, make learning and building so much easier. No more rewinding
          videos or skipping to the “good part”—now you can just ask, watch, and
          learn as it happens.
        </p>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          <strong>
            Interactive, real-time help might just be the future of learning
            tech.
          </strong>
        </p>
        <p className="dark:text-neutral-400 text-gray-500 leading-loose text-justify text-[14px] tracking-wide">
          Give it a try, and let me know what you think. Is this the future? Is
          it the end of traditional tutorial videos? I’m curious to hear your
          thoughts!
        </p>
      </div>
    </div>
  );
}
