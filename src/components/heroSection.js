//import SvgLogo from "./chatbotLogo";
"use client";
import "@/styles/globals.css";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Navbar from "./navbar";

import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
const HeroSection = () => {
  return (
    <>
      <div class="relative">
        <div class="relative pb-5">
          <div class="relative">
            <Navbar />
          </div>
          <main class="text-7xl mt-20 mx-auto max-w-12xl px-4">
            <div class="text-center space-y-2">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-white py-2 px-4 ring-1 ring-white/5 hover:ring-indigo-700  transition duration-300">
                  <span className="text-sm text-black">
                    Introducing SiteGenie
                  </span>
                  <ChevronRight className="text-black w-6 h-6 transition duration-300 transform hover:scale-110" />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
              <div class="text-6xl font-semibold tracking-tight py-8 pb-4 text-gray-900">
                <span class="block xl:inline">Enhance website experience </span>
                <span class="block text-indigo-600 xl:inline">
                  with our efficient chatbot.
                </span>
              </div>
              <p class="max-w-md mx-auto py-1 text-base text-gray-600 sm:text-lg md:text-xl md:max-w-3xl">
                Transform your website experience with our tailored chatbot.
                Expertly trained for efficiency, it saves you time and delivers
                unmatched interaction.
              </p>
              <div className="flex items-center justify-center py-4">
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-4 rounded-full bg-indigo-500 py-3 px-6 ring-1 ring-white/50 hover:ring-indigo-600 hover:bg-indigo-600 transition duration-300">
                    <span className="text-lg">Get started</span>
                    <ArrowRight className="text-white w-8 h-8 transition duration-300 transform hover:scale-110" />
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/200 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
width="25"
height="25"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2.75"
stroke-linecap="round"
stroke-linejoin="round"
className="lucide lucide-arrow-right"
>
<path d="M5 12h14" />
<path d="m12 5 7 7-7 7" />
</svg> */
}
