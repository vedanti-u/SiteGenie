import SvgLogo from "./chatbotLogo";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import styles from "../styles/globals.css";
const HeroSection = () => {
  return (
    <>
      <div className={`hero-section ${styles.heroSection}`}>
        <div class="relative bg-gray-50 overflow-hidden">
          <div class="relative pt-6 pb-16 sm:pb-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                class="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="#" className="flex items-center">
                      <SvgLogo />
                      <span className="text-5xl ml-2 font-bold text-indigo-700  ">
                        SiteGenie.ai
                      </span>
                    </a>

                    <div class="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                      >
                        <span class="sr-only">Open main menu</span>
                        <SvgLogo />
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div class="hidden md:flex md:space-x-10">
                  <a
                    href="/"
                    class="font-bold text-lg text-black hover:text-indigo-600"
                  >
                    Home
                  </a>

                  <a
                    href="../our-team"
                    class="font-bold text-lg text-black hover:text-indigo-600"
                  >
                    Team
                  </a>

                  <a
                    href="../about"
                    class="font-bold text-lg text-black hover:text-indigo-600"
                  >
                    About
                  </a>
                </div> */}
                <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                  <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
                    <button
                      data-tooltip-target="tooltip-home"
                      type="button"
                      class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                      <svg
                        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      <span class="sr-only">Home</span>
                    </button>
                    <div
                      onClick={() => {
                        window.location.href = "/";
                      }}
                      id="tooltip-home"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Home
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button
                      data-tooltip-target="tooltip-wallet"
                      type="button"
                      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                      <svg
                        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                        <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                      </svg>
                      <span class="sr-only">Wallet</span>
                    </button>
                    <div
                      id="tooltip-wallet"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Pricing
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <div class="flex items-center justify-center">
                      <button
                        data-tooltip-target="tooltip-new"
                        type="button"
                        class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                        <span class="sr-only">New item</span>
                      </button>
                    </div>
                    <div
                      onClick={() => {
                        window.location.href = "/sign-up";
                      }}
                      id="tooltip-new"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Create chatBOT
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button
                      data-tooltip-target="tooltip-settings"
                      type="button"
                      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                      <svg
                        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                        />
                      </svg>
                      <span class="sr-only">Settings</span>
                    </button>
                    <div
                      id="tooltip-settings"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Settings
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button
                      data-tooltip-target="tooltip-profile"
                      type="button"
                      class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                      <svg
                        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <span class="sr-only">Profile</span>
                    </button>
                    <div
                      onClick={() => {
                        window.location.href = "/sign-up";
                      }}
                      id="tooltip-profile"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Profile
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>
                <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 gap-4">
                  <Button
                    onClick={() => {
                      window.location.href = "/sign-in";
                    }}
                    variant="primary"
                    className="bg-indigo-700 text-white hover:bg-indigo-900"
                  >
                    SignIn
                  </Button>
                  <Button
                    onClick={() => {
                      window.location.href = "/sign-up";
                    }}
                    variant="primary"
                    className="bg-indigo-700 text-white hover:bg-indigo-900"
                  >
                    SignUp
                  </Button>
                </div>
              </nav>
            </div>
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
                  Revolutionize user experience with our website-tailored
                  chatbot, meticulously trained and fine-tuned on your data,
                  ensuring unparalleled efficiency and time-saving interactions.
                </p>
                <button class="px-6 py-3.5 relative inline-flex items-center justify-center p-0.5 mb-1 me-1 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-5 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span class="text-2xl px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Create Chatbot
                  </span>
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
