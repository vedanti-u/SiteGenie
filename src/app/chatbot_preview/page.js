"use client";
import "../../styles/globals.css";
import { useState, useRef, useEffect } from "react";
import SvgLogo from "../../components/chatbotLogo";
import Image from "next/image";

const Preview = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="min-h-full">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <SvgLogo />
                  <span
                    className="ml-2 font-bold text-indigo-700"
                    style={{ fontSize: "2em" }}
                  >
                    SiteGenie
                  </span>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  {/* Heroicon name: outline/bell */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                {/* Profile dropdown */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Chatbot Preview
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-max p-2">
                  <div className="max-w-7xl mx-auto py-2 px-4 bg-white sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                      <div className="px-4 py-2 sm:px-6">
                        {/* {/* <div className="flex-1bg-white shadow sm:rounded-lg px-6 bg-red m-6 ">  */}
                        <h3 className="text-xl font-semibold text-indigo-500">
                          {inputValue}
                        </h3>
                        {/* </div> */}
                      </div>
                      <div className="bg-white shadow sm:rounded-lg px-6 bg-red m-6">
                        <div className="px-4 py-5 sm:p-6">
                          {" "}
                          <iframe
                            src={`http://localhost:3000/chatbot?url=${encodeURIComponent(
                              inputValue
                            )}`}
                            className="w-full h-64"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="bg-white shadow sm:rounded-lg">
                          <div className="px-4 py-2 sm:p-6">
                            <div className="sm:flex sm:items-start sm:justify-between px-3">
                              <div>
                                <h3 className="text-xl leading-6 font-medium text-gray-900">
                                  Embbed this iframe
                                </h3>
                                <div className="mt-2 mx-100 text-sm text-gray-500 w-100">
                                  <div className="mt-1">
                                    <div
                                      type="email"
                                      name="email"
                                      id="email"
                                      className="w-100 mx-0 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg text-gray-500 border border-black rounded-md w-100"
                                    >
                                      {console.log(
                                        encodeURIComponent(inputValue)
                                      )}
                                      <pre>
                                        <code>
                                          <iframe
                                            src="http://localhost:3000/chatbot?url=$
                                          {inputValue}"
                                            class="w-full h-64"
                                            frameborder="0"
                                            allowfullscreen
                                          ></iframe>
                                          ;
                                        </code>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 sm:mt-8 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center pl-14">
                                <button
                                  type="button"
                                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                  onClick={() => {
                                    navigator.clipboard.writeText(`<iframe
              className="w-full h-64"
              frameBorder="0"
              allowFullScreen
            ></iframe>`);
                                  }}
                                  id="copyButton"
                                >
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Preview;
