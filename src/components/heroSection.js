import SvgLogo from "./chatbotLogo";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";

const HeroSection = () => {
  return (
    <>
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
                    <span
                      className="ml-2 font-bold text-indigo-700"
                      style={{ fontSize: "2em" }}
                    >
                      SiteGenie
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
              <div class="hidden md:flex md:space-x-10">
                <a
                  href="/"
                  class="font-bold text-lg text-black hover:text-indigo-600"
                >
                  Home
                </a>

                <a
                  href="../our-team"
                  className="font-bold text-lg text-black hover:text-indigo-600"
                >
                  Team
                </a>

                <a
                  href="../about"
                  class="font-bold text-lg text-black hover:text-indigo-600"
                >
                  About
                </a>

                <a
                  href=""
                  class="font-bold text-lg text-black hover:text-indigo-600"
                >
                  Pricing
                </a>
              </div>
              <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 gap-4">
                <span class="inline-flex rounded-md shadow">
                  <Button href="/sign-in" variant="secondary">
                    SignIn
                  </Button>
                  <Button href="/sign-up" variant="secondary">
                    SignUp
                  </Button>
                </span>
              </div>
            </nav>
          </div>
          <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div class="text-center">
              <h1 class="text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Maximize chatbot vibes for </span>
                <span class="block text-indigo-600 xl:inline">
                  quick wins! 🚀✨ #EffortlessChats
                </span>
              </h1>
              <p class="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Revolutionize user experience with our website-tailored chatbot,
                meticulously trained and fine-tuned on your data, ensuring
                unparalleled efficiency and time-saving interactions.
              </p>
              <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div class="rounded-md shadow">
                  <a
                    href="/sign-up"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Create Chatbot
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
