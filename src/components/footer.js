import { GithubIcon, TwitterIcon } from "lucide-react";
import SiteGenieLogo from "./sitegenie-logo";
import Image from "next/image";
const FooterSection = () => {
  return (
    <>
      <footer class="w-full py-8 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <a href="/" class="flex justify-center mb-8">
              <div className="relative w-64 h-24">
                {" "}
                {/* Adjusted width and height */}
                <Image
                  src="/sitegenie-logo.png"
                  alt="Description of the image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span class="self-center text-black text-5xl whitespace-nowrap">
                {/* <SiteGenieLogo />{" "} */}
              </span>
            </a>

            <div class="flex justify-center items-center space-x-6 mb-8">
              <a
                href="https://github.com/vedanti-u/site-frontend"
                class="text-gray-900 transition-all duration-500 hover:text-indigo-600"
              >
                <GithubIcon width="40px" height="40px" />
              </a>
              <a
                href="https://x.com/vedbhalerao444"
                class="text-gray-900 transition-all duration-500 hover:text-indigo-600"
              >
                <TwitterIcon width="40px" height="40px" />
              </a>
              <a
                href="https://www.notion.so/90d2c6cd3b544d35aeda0c8ab2bc3700"
                className="text-gray-900 transition-all duration-500 hover:text-indigo-600"
              >
                <svg
                  width="40px"
                  height="40px"
                  className="hover:stroke-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth="1.56"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16.12 9.69027V17.6947L15.18 17.7942L10.64 9.9292L9.8 10.0088V21L20 20.2832V6.06562L15.34 3L3 4.09687V17.1372L6.32 21V7.10625L16.12 6.31832"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>

            <span class="text-lg text-gray-500">
              © <a href="/">SiteGeniei</a> 2023 - Future, All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
