//import SvgLogo from "./chatbotLogo";
"use client";
import "@/styles/globals.css";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Navbar from "./navbar";

import { ArrowRight, ChevronRight } from "lucide-react";
const HeroSection = () => {
  return (
    <>
      <div class="relative">
        <div class="relative pb-5">
          <div class="relative">
            <Navbar />
          </div>
          <main class="mt-28 mx-auto max-w-12xl px-4">
            <div class="text-center space-y-2">
              <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
                <span class="font-inter text-xs font-medium text-gray-900 ml-3">
                  Explore how to use for brands.
                </span>
                <a
                  href="javascript:;"
                  class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                      stroke="white"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div class="text-5xl py-8 pb-4 text-gray-900">
                <span class="block xl:inline">Enhance website experience </span>
                <span class="block text-indigo-600 xl:inline">
                  with our efficient chatbot.
                </span>
              </div>
              <p class="max-w-md mx-auto py-1 text-gray-700 text-lg md:max-w-3xl">
                Transform your website experience with our tailored chatbot.
                Expertly trained for efficiency, it saves you time and delivers
                unmatched interaction.
              </p>
              <div className="flex items-center justify-center py-4">
                <a
                  href="/sign-in"
                  class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
                >
                  Create an account
                  <svg
                    class="ml-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
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
