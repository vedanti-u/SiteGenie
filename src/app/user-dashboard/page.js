"use client";
import "../../styles/globals.css";
import { Button } from "@/components/ui/button";
import Create from "@/components/createChatbot";
import { useState, useRef, useEffect, useMemo } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

const create = {
  tiers: [
    {
      title: "daywiseai.com",
      price: "DaywiseAi",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://daywiseai.com/",
    },
    {
      title: "alentarelectric.com",
      price: "AlenElectric",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://alentarelectric.com/",
    },
    {
      title: "sippline.com",
      price: "Sippline",
      cta: "Preview Chatbot",
      link: "http://localhost:3000/preview?url=https://sippline.com/",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () => {
    // Add sign out logic here
    console.log("User signed out");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="h-screen">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-4xl ml-2 font-bold text-indigo-700">
                    SiteGenie
                  </span>
                </div>
              </div>
              <div
                className="hidden sm:ml-6 sm:flex sm:items-center relative"
                ref={dropdownRef}
              >
                <div
                  className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <Image
                    src="/path_to_user_profile_image.jpg"
                    alt="User Profile"
                    className="w-full h-full object-cover"
                    width={12}
                    height={12}
                  />
                </div>

                {isOpen && (
                  <div className="absolute right-0 mt-20 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <button
                      onClick={signOut}
                      className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <span>Sign Out</span>
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5"
                          stroke="gray"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-20">
              <h1 className="text-4xl items-center justify-center text-semibold text-gray-900">
                Dashboard
              </h1>
              <div className="border border-gray-200 rounded-lg h-15 flex justify-between items-center shadow-lg p-4 bg-white">
                <p className="text-xl text-gray-700 dark:text-gray-700">
                  To create a chatbot click on below button
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="primary"
                      className="bg-indigo-600 text-white h-12 py-4 px-6 text-lg rounded-md shadow-lg hover:bg-indigo-700"
                    >
                      <div className="flex items-center space-x-2">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M10.4269 2.42148C11.4003 1.85951 12.5996 1.8595 13.573 2.42148L19.5087 5.84848C20.4821 6.41046 21.0817 7.44904 21.0817 8.573V15.427C21.0817 16.551 20.4821 17.5895 19.5087 18.1515L13.573 21.5785C12.5996 22.1405 11.4003 22.1405 10.4269 21.5785L4.49122 18.1515C3.51784 17.5895 2.91821 16.551 2.91821 15.427V8.573C2.91821 7.44904 3.51784 6.41046 4.49122 5.84848L10.4269 2.42148ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25V9C11.25 8.58579 11.5858 8.25 12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                            fill="#ffffff"
                            fillRule="evenodd"
                          />
                        </svg>
                        <span>Create new</span>
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <Create />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </header>
          <main>
            <div className="py-8">
              <div className="px-20">
                <h1 className="text-3xl text-semibold leading-tight text-gray-900">
                  Chatbots powered by SiteGenie
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
