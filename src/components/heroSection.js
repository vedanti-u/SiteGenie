//import SvgLogo from "./chatbotLogo";
"use client";
import "@/styles/globals.css";
import ShimmerButton from "@/components/magicui/shimmer-button";
import RetroGrid from "./magicui/retro-grid";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Navbar from "./navbar";
const HeroSection = () => {
  return (
    <>
      <div class="relative">
        <div class="relative pt-6 pb-16 sm:pb-24">
          <div class="relative">
            <Navbar />
          </div>
          <RetroGrid />

          <main class=" text-7xl mt-16 mx-auto max-w-12xl px-4 sm:mt-24">
            <div class="text-center">
              <h1 class="text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class=" block xl:inline">
                  Maximize chatbot vibes for{" "}
                </span>
                <span class="block text-indigo-600 xl:inline ">
                  quick wins! 🚀✨ #EffortlessChats
                </span>
              </h1>
              <p class="mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Revolutionize user experience with our website-tailored chatbot,
                meticulously trained and fine-tuned on your data, ensuring
                unparalleled efficiency and time-saving interactions.
              </p>
              <div className="flex items-center justify-center py-4">
                <ShimmerButton className="shadow-2xl bg-black">
                  <span
                    className="flex items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:to-slate-900/10 lg:text-lg space-x-3"
                    href="/sign-in"
                  >
                    Get Started
                    <svg
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
                    </svg>
                  </span>
                </ShimmerButton>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
