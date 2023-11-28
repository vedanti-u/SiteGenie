import Link from "next/link";
import Image from 'next/image';
import Footer from "./components/footer";
// import Faqs from "./components/faqs";
import CTA from "./components/cta-section";
// import { GeistSans } from 'geist/font/sans';
import './style/globals.css'

export default function Example() {
  return (
    <div className="relative mx-5">
      <nav className="bg-white-800 p-4 flex items-center justify-between shadow-md z-10">
        <div className="flex-shrink-0">
          {/* <img
            src="https://img.freepik.com/premium-vector/robot-chat-bot-icon-symbol-support-service-concept-vector-illustration_136875-4410.jpg?size=626&ext=jpg&ga=GA1.1.763251398.1687013890&semt=ais"
            alt="Logo"
            className="h-20 w-20"
          /> */}
        </div>

        <div className="hidden md:flex space-x-4">
         
          <Link href="video_Demo" className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2">
            Video Demo
          </Link>
          <Link href="features" className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2">
            Features
          </Link>
          <Link href="about_Us" className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2">
            About Us
          </Link>
          <Link href="our_Team" className="hover:rounded-md hover:bg-purple-600 hover:shadow-md p-2">
            Our Team
          </Link>
        </div>

        <div>
        <Link
            href="#"
            className="m-2 px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-500 hover:bg-purple-600"
          >
            Sign In
          </Link>

          <Link
            href="#"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-500 hover:bg-purple-600"
          >
            Login
          </Link>
        </div>
      </nav>

      <main className="lg:relative mx-5">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Create chatbot project</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
              Create a chatbot for any website
            </p>

            <ul class="flex flex-col justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-900 mt-6 sm:flex-row sm:flex-wrap sm:mt-8 lg:justify-start">
              <li class="flex items-center justify-center gap-2">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                </svg>
                Personalized Chatbot
              </li>
              <li class="flex items-center justify-center gap-2">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                </svg>
                Create chatbot for any website
              </li>
              <li class="flex items-center justify-center gap-2">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                </svg>
                Any other feature
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                </svg>
                Any other feature
              </li>
            </ul>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="mr-4">
                <Link
                  href="menu"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-500 hover:bg-purple-600"
                >
                  Create chatbot
                </Link>
              </div>
              
              <div>
                <Link
                  href="#"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-500 hover:bg-purple-600"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full ">
          <img
            className="absolute inset-0 w-full h-full object-cover my-2"
            src="https://img.freepik.com/free-vector/call-center-isometric-concept_1284-69078.jpg?size=626&ext=jpg&ga=GA1.1.763251398.1687013890&semt=sph"
            alt="Image"
          />
        </div>
      </main>
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Steps to follow
            </h2>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Login to our site
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-purple-600">
                      Step 1
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Provide a valid website URL
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-purple-600">
                      Step 2
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Ask questions to your own chatbot
                    </dt>
                    <dd className="order-1 text-5xl font-bold text-purple-600">
                      Step 3
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA/>
      <Footer/>
    </div>
  );
}
