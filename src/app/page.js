//import Image from 'next/image'

//import Chatbot from "./chatbot/chatbot";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Link from "next/link";

//yeh main page hai jo first render hota hai

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <h1>Home page </h1> */}
      <div className="relative bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="Logo daal dena"
              alt="Logo daal dena"
              className="h-8 w-8"
            />
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="#" className="hover:text-teal-400">
              Button1
            </Link>
            <Link href="#" className="hover:text-teal-400">
              Button2
            </Link>
            <Link href="#" className="hover:text-teal-400">
              Button3
            </Link>
            <Link href="#" className="hover:text-teal-400">
              Button4
            </Link>
          </div>

          <div>
            <Link
              href="#"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-teal-500 hover:bg-teal-600"
            >
              Login
            </Link>
          </div>
        </nav>

        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Create chatbot project</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
                Create a chatbot for any website
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="mr-4">
                  <Link
                    href="#"
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-teal-500 hover:bg-teal-600"
                  >
                    Create chatbot
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-teal-500 hover:bg-teal-600"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="Image daal dena"
              alt="image daal dena"
            />
          </div>
        </main>
      </div>

      {/* <Footer /> */}
    </>
  );
}
