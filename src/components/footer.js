import { GithubIcon, TwitterIcon } from "lucide-react";
import SvgLogo from "./chatbotLogo";
const FooterSection = () => {
  return (
    <>
      <footer class="w-full py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
            <a href="/" class="flex justify-center ">
              <span className="self-center text-black text-4xl font-semibold whitespace-nowrap">
                Site<span className="text-indigo-600">Genie.ai</span>
              </span>{" "}
            </a>
            <ul class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  Products
                </a>
              </li>
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  Team
                </a>
              </li>
              <li>
                <a href="#" class=" text-gray-800 hover:text-gray-900">
                  Video Demo
                </a>
              </li>
            </ul>
            <div class="flex space-x-10 justify-center items-center mb-14">
              <a
                href="#"
                class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <GithubIcon width="64px" height="64px" />
              </a>
              <a
                href="#"
                class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <TwitterIcon width="64px" height="64px" />
              </a>
              <a
                href="#"
                class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  width="65px"
                  height="65px"
                  className="hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  stroke-width="1.56"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16.12 9.69027V17.6947L15.18 17.7942L10.64 9.9292L9.8 10.0088V21L20 20.2832V6.06562L15.34 3L3 4.09687V17.1372L6.32 21V7.10625L16.12 6.31832"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <span class="text-lg text-gray-500 text-center block">
              ©<a href="/">SiteGenie.ai</a> 2024, All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
