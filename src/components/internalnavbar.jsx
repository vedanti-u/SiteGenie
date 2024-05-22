"use client";
import React from "react";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import { useEffect, useState ,useRef} from "react";

const InternalNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the user has scrolled down
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-white bg-opacity-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-200 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-black text-4xl font-semibold whitespace-nowrap">
            Site<span className="text-indigo-600">Genie.ai</span>
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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

                  <LogOutIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InternalNavbar;
