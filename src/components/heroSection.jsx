import SvgLogo from "./chatbotLogo";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import styles from "../styles/globals.css";
import Link from "next/link";
import { Icons } from "./shared/icons";
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
                  <Button
                    onClick={() => {
                      window.location.href = "/sign-up";
                    }}
                    variant="primary"
                    className="px-5 py-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm text-center me-2 mb-2"
                  >
                    SignUp
                  </Button>
                </div>
              </nav>
            </div>
            {/* --------------------------------------------------------- */}
            <section className="space-y-6 py-12 sm:py-20 lg:py-20">
              <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
                <Link
                  href="https://twitter.com/miickasmt/status/1719892161095745801"
                  className="border border-input hover:bg-accent hover:text-accent-foreground rounded-full h-9 px-4"
                  target="_blank"
                >
                  <span className="mr-3">🎉</span> Introducing on{" "}
                  <Icons.twitter className="ml-2 size-3.5" />
                </Link>

                <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
                  Maximize chatbot vibes for {}
                  <span className="text-gradient_indigo-purple font-extrabold">
                    quick wins! 🚀✨
                  </span>
                </h1>

                <p
                  className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                  style={{
                    animationDelay: "0.35s",
                    animationFillMode: "forwards",
                  }}
                >
                  Revolutionize user experience with our website-tailored //
                  chatbot, meticulously trained and fine-tuned on your data, //
                  ensuring unparalleled efficiency and time-saving interactions.
                </p>

                <div
                  className="flex justify-center space-x-2 md:space-x-4"
                  style={{
                    animationDelay: "0.4s",
                    animationFillMode: "forwards",
                  }}
                >
                  <Link
                    href="/pricing"
                    prefetch={true}
                    className="h-11 px-8 rounded-full gap-2"
                  >
                    <span>Go Pricing</span>
                    <Icons.arrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/user-dashboard"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-input hover:bg-accent hover:text-accent-foreground h-11 rounded-full px-8"
                  >
                    <Icons.gitHub className="mr-2 size-4" />
                    <p>
                      <span className="hidden sm:inline-block">Star on</span>{" "}
                      GitHub{" "}
                    </p>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

// <h1 class="text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                   <span class=" block xl:inline">
//                     Maximize chatbot vibes for{" "}
//                   </span>
//                   <span class="block text-indigo-600 xl:inline ">
//                     quick wins! 🚀✨ #EffortlessChats
//                   </span>
//                 </h1>
//                 <p class="mt-3 max-w-md mx-auto mb-6 text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//                   Revolutionize user experience with our website-tailored
//                   chatbot, meticulously trained and fine-tuned on your data,
//                   ensuring unparalleled efficiency and time-saving interactions.
//                 </p>
