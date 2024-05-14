//import SvgLogo from "./chatbotLogo";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
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
                      {/* <SvgLogo /> */}
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
                        {/* <SvgLogo /> */}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 gap-4">
                  <Button
                    onClick={() => {
                      window.location.href = "/sign-in";
                    }}
                    variant="primary"
                    className="px-5 py-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm text-center me-2 mb-2"
                  >
                    SignIn
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
                <button class="relative inline-flex items-center justify-center p-0.5 mb-1 me-1 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 dark:text-white focus:ring-5 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span class="text-2xl px-6 py-3.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
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
